import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { postReviews } from '../redux/actions';

const Validate = (input) => {
  const errors = {}
  const commentRegex = /^[a-zA-Z,.\s]+$/
  const scoreRegex = /^\d+$/

  //comment
  if (input.comment && input.comment.length > 1 && !commentRegex.test(input.comment)) {
    errors.comment = 'No se permiten caracteres especiales';
  }
  if (input.comment && input.comment.length < 3 || input.comment && input.comment.length > 100) {
    errors.comment = 'El comentario debe tener entre 3 y 100 caracteres'
  }

  //score
  if (input.score && !scoreRegex.test(input.score)) {
    errors.score = 'La puntuación debe ser un número entero';
  } else {
    const scoreNumber = Number(input.score);
    if (scoreNumber && scoreNumber < 1 || scoreNumber && scoreNumber > 5) {
      errors.score = 'La puntuación debe estar entre 1 y 5';
    }
  }

  return errors
}

const ReviewForm = ({ onSuccess }) => {
  const dispatch = useDispatch();
  const infoUserLogged = useSelector((state) => state.infoUserLogged)

  const [input, setInput] = useState({
    score: "",
    comment: ""
  })

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (input) {
      setErrors(Validate(input))
    }
  }, [input])

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [property]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validate(input);
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Enviar el formulario
        await dispatch(postReviews(infoUserLogged.id, input));
        Swal.fire({
          icon: "success",
          title: "Comentario creado con éxito",
          text: "Exitosa",
          showConfirmButton: true,
        });
        onSuccess();  // Cierra el modal cuando el comentario se envía con éxito
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error, por favor intente de nuevo",
          showConfirmButton: true,
        });
      }
    };
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="mb-4">
        <label htmlFor='' className='mr-3 font-semibold font-Montserrat'>Comentario:</label>
        <input type='text' className='w-64 px-4 border border-gray-500 rounded-lg focus:outline-none'
          name="comment"
          value={input.comment}
          onChange={handleChange}
        />
        {errors.comment && <p style={{ color: 'darkgrey' }}>{errors.comment}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor='' className='mr-3 font-semibold font-Montserrat'> Puntuación:</label>
        <input className='w-64 px-4 border border-gray-500 rounded-lg focus:outline-none'
          type="number"
          name="score"
          value={input.score || ''}
          onChange={handleChange}
          min="1"
          max="5"
        />
        {errors.score && <p style={{ color: 'darkgrey' }}>{errors.score}</p>}

      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
    </form>
  );
};


export default ReviewForm


// //Cuento el número de palabras
// const wordCount = input.comment.trim().split(/\s+/).length;
// // Verifico si el comentario contiene solo letras y espacios
// if (input.comment.length > 1 && !commentRegex.test(input.comment)) {
//   errors.comment = 'Sólo se permiten letras y espacios';
// }
// // Verifico que el comentario tenga entre 3 y 100 palabras
// if (wordCount < 3 || wordCount > 100) {
//   errors.comment = 'El comentario debe tener entre 3 y 100 palabras';
// }
