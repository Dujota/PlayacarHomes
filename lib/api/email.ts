import axios from 'axios';

export const subscribeUser = async (mail, setLoading, setMessage, setSuccess) => {
  try {
    const res = await axios.put('/api/subscribe', {
      mail: mail,
    });
    debugger;
    if (res.status === 200) {
      setLoading(false);
      setSuccess(true);
      setMessage(res.data.message);
    } else {
      setLoading(false);
      setMessage(res.data.message);
    }
  } catch (error) {
    setLoading(false);
    setMessage(String(error.message));
  }
};

export const contactUser = async (data, setLoading, setMessage, setSuccess) => {
  try {
    const res = await axios.post('/api/contact', data);
    debugger;
    if (res.status === 200) {
      setLoading(false);
      setSuccess(true);
      setMessage(res.data.message);
    } else {
      setLoading(false);
      setMessage(res.data.message);
    }
  } catch (error) {
    debugger;
    setLoading(false);
    setMessage(String(error.message));
  }
};
