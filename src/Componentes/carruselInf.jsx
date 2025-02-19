
import React, { useState, useEffect } from 'react';
import useContentful from '../useContentful';
import { ClipLoader } from 'react-spinners';


const CarruselInf = () => {
    // Estado para manejar la lista de autores
  const [authors, setAuthors] = useState([]);
  const { getAuthors } = useContentful(); // Función para obtener autores desde Contentful
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [error, setError] = useState(null); // Manejo de errores

  // Hook de efecto para cargar datos
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Inicia el estado de carga
        const response = await getAuthors(); // Obtiene autores desde Contentful
        setAuthors(response || []); // Asigna los datos al estado, o un arreglo vacío si la respuesta es nula
      } catch (err) {
        setError('Error al cargar los autores'); // Maneja errores
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    // Evita volver a cargar los datos si ya se han obtenido
    if (authors.length === 0) {
      fetchData();
    }
  }, [getAuthors, authors.length]); // Dependencias: solo ejecuta el efecto cuando cambien

  // Muestra el indicador de carga si `loading` es verdadero
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <ClipLoader color="#007bff" loading={loading} size={75} />
      </div>
    );
  }

  // Muestra el mensaje de error si hay algún problema
  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="CarruselInfinito">
        {authors.length > 0 &&
          authors.map((author, index) => (
            <div className=''>
              <img src={author.Carr1} alt="" className='imgcarru' />
              <img src={author.Carr2} alt="" className='imgcarru' />
              <img src={author.Carr3} alt="" className='imgcarru' />
              <img src={author.Carr4} alt="" className='imgcarru' />
              <img src={author.Carr5} alt="" className='imgcarru' />
              <img src={author.Carr6} alt="" className='imgcarru' />
              <img src={author.Carr7} alt="" className='imgcarru' />
              <img src={author.Carr8} alt="" className='imgcarru' />
              <img src={author.Carr9} alt="" className='imgcarru' />
              <img src={author.Carr10} alt="" className='imgcarru' />
              <img src={author.Carr11} alt="" className='imgcarru' />
              <img src={author.Carr12} alt="" className='imgcarru' />
              <img src={author.Carr13} alt="" className='imgcarru' />
              <img src={author.Carr14} alt="" className='imgcarru' />
              <img src={author.Carr15} alt="" className='imgcarru' />
              <img src={author.Carr16} alt="" className='imgcarru' />
              <img src={author.Carr17} alt="" className='imgcarru' />
              <img src={author.Carr18} alt="" className='imgcarru' />
              <img src={author.Carr19} alt="" className='imgcarru' />
              <img src={author.Carr20} alt="" className='imgcarru' />
              <img src={author.Carr21} alt="" className='imgcarru' />
              <img src={author.Carr22} alt="" className='imgcarru' />
              <img src={author.Carr23} alt="" className='imgcarru' />
              <img src={author.Carr24} alt="" className='imgcarru' />
              <img src={author.Carr25} alt="" className='imgcarru' />
              <img src={author.Carr26} alt="" className='imgcarru' />
              <img src={author.Carr27} alt="" className='imgcarru' />
              <img src={author.Carr28} alt="" className='imgcarru' />
              <img src={author.Carr29} alt="" className='imgcarru' />
              <img src={author.Carr30} alt="" className='imgcarru' />





            </div>))}
      </div>
  )
}

export default CarruselInf
