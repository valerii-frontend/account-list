import { useState, useEffect } from "react";
import axios from "axios";

import { REQ_HEADER, ACCOUNTS_API, ACCOUNT_TYPES_API } from "./utils/constants";

import UsersTable from "./components/UsersTable";
import MainTitle from "./components/MainTitle";
import Loader from "./components/Loader";

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [accountTypes, setAccountTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountsResponse = await axios.get(ACCOUNTS_API, REQ_HEADER);
        const accountTypesResponse = await axios.get(ACCOUNT_TYPES_API, REQ_HEADER);

        setAccounts(accountsResponse.data);
        setAccountTypes(accountTypesResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='App xl:container mx-auto my-5 px-3'>
      <MainTitle text={loading ? "Loading..." : "Accounts list"} />
      {loading ? <Loader loading={loading} /> : <UsersTable accountTypes={accountTypes} accounts={accounts} />}
    </div>
  );
};

export default App;
