import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingUsers } from "../../Redax/users/operations";
import User from "../User/User";
import Pagination from "../Pagination/Pagination";

const List = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.users);
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 5;
  const pagesVisited = pageNumber * userPerPage;
  const userLimit = data.slice(pagesVisited, pagesVisited + userPerPage);
  const pageCount = Math.ceil(data.length / userPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    dispatch(loadingUsers());
  }, [dispatch]);
  return (
    <div className="container">
      <h3 className="center-align">List user</h3>
      <ul className="collection ">
        {!data.length ? (
          <li className="collection-item center-align">List user emty</li>
        ) : (
          userLimit.map((user) => <User key={user.id} user={user} />)
        )}
      </ul>

      {data.length > 5 && (
        <Pagination changePage={changePage} pageCount={pageCount} />
      )}
    </div>
  );
};

export default List;
