import { useEffect, useState } from "react";
import axios from 'axios';



const usePagination = (url,itemsPerPage) => {

    const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

   
return{}
}