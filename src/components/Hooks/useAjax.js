import { useEffect, useState } from "react"

export const useAjax = (url = '')=>{

    const [estado, setEstado] = useState({
        datos: null,
        loading: null, 
    })
    
    const getData = async () => {
        setEstado({
          ...estado,
          loading: true,
        });
    
        try {
          await fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Se presento un error");
              }
              return response.json();
            })
            .then((data) => {
              setTimeout(() => {
                setEstado({
                  datos: data.data,
                  loading: false,
                });
              }, 2000);
            });
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getData();
      }, [url]);


      return {
        getData,
        datos: estado.datos,
        loading: estado.loading,
      }
}