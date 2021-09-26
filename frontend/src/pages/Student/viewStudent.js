import axios from "axios";
import { useEffect, useState } from "react";

import { Stack, Avatar, Typography } from "@mui/material";
import Loading from "../../components/Loading/Loading";
import loader from "../../animation/loader.json";

const ViewStudent = ({ match }) => {
  const [email, setEmail] = useState();
  const [firstName, setfirstName] = useState();
  const [lastName, setLastName] = useState();
  const [location, setLocation] = useState();
  const [date, setDate] = useState();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);

  const parseISOString = (s) => {
    const date = new Date(s);
    return date.toDateString();
  };

  useEffect(() => {
    const fetching = async () => {
      setLoading(true);
      const { data } = await axios.get(`/api/students/${match.params.id}`);

      setfirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setDate(parseISOString(data.DOB));
      setLocation(data.location);
      setPic(data.pic);
      setLoading(false);
    };

    fetching();
  }, [match.params.id]);
  return (
    <div>
      {loading ? (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Loading lotti={loader} height={300} width={300} />
        </div>
      ) : (
        <div
        >
          <Stack
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              src={pic}
              variant="rounded"
              sx={{ width: 96, height: 120 }}
            />
            <Typography variant="h3" component="div">
              {`${firstName} ${lastName}`}
            </Typography>
            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" component="div">
                {`Email: ${email}`}
              </Typography>
              <Typography variant="h5" component="div">
                {`Location: ${location}`}
              </Typography>
              <Typography variant="h5" component="div">
                {`Date of Birth: ${date}`}
              </Typography>
            </Stack>
          </Stack>
        </div>
      )}
    </div>
  );
};

export default ViewStudent;
