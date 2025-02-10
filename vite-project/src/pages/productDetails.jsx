import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { Loader,AlertCircle} from "lucide-react";
import Nav from".../components/auth/nav";

const{id} = useParams();
const [product,setProduct]=useState(null);
const[loading,setLoading] = useState(true);
const email = "aarzuhingorani@gmail.com";
useEffect() => {
    const fetchProduct =async () => {
        try {
            const response = await axios.get("");
            setProduct(response.data.product);
            setLoading(false);
            
          }
    }
}
