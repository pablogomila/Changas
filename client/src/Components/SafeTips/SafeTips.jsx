import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { clearSinglePost, getSinglePost } from "../../Redux/actions";

const SafeTips = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.singlePost);
  let { id } = useParams();

  useEffect(() => {
    dispatch(getSinglePost(id));
    dispatch(clearSinglePost());
  }, [dispatch, id]);
  return (
    <>
      <button
        className="flex ml-auto text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded  "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Contactar
      </button>
      {showModal ? (
        <>
          <div className="overscroll-none overscroll-behavior: none justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl max-h-screen">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between pt-5 pl-5 pb-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Consejos de Seguridad
                  </h3>

                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    className="bg-white rounded-md p-2 mr-5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative  flex-auto ">
                  <p className="my-4 px-5 text-blueGray-500 text-sm text-left leading-relaxed ">
                    Est?? comprobado que la gran mayor??a de servicios contratados
                    por internet terminan siendo experiencias positivas tanto
                    para el profesional como para el cliente.
                    <br />
                    Nuestro objetivo es beneficiar el trabajo honesto y de
                    calidad, beneficiando a ambas partes. Somos buena gente,
                    como vos. Por ello te pedimos que sigas atentamente estas
                    sugerencias y nos ayudes a construir una comunidad segura
                    para todos, cuid??ndote vos y cuidando al resto de los
                    usuarios.
                  </p>
                </div>
                <div className="border-t border-solid border-blueGray-200 text-s py-5 text-left">
                  <li className="px-5">
                    CHANGAS es <b> s??lo un intermediario </b> entre las partes contratantes.
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    Antes de coordinar una visita, <b> cheque?? los datos </b>{" "}
                    del prestador del servicio ?? del cliente que te quiera contratar.
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    <b>
                      {" "}
                      Le?? atentamente los comentarios y rese??as de la
                      publicaci??n.</b> Son una buena gu??a las primeras veces que quieras contratar a alguien.
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    Nunca reveles tus contrase??as ni claves bancarias. NO
                    compartas estos datos con NING??N usuario. Si alguien te los
                    pide, por favor realiz?? el{" "}
                    <b> reporte/denuncia </b>
                    correspondiente.
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    Nadie trabajando para CHANGAS va a pedirte que le env??es
                    informaci??n sensible como la mencionada en el p??rrafo
                    anterior, ni pedirte dinero para que puedas contratar o contactarte con alguien. Nunca.
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    Para contratar un servicio <b> no es obligatorio </b> que
                    realices el pago con anticipaci??n, ambas partes podr??n
                    coordinar la metodolog??a de pago que m??s les convenga.
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    Sugerimos <b> coordinar por chat </b> los detalles y
                    pormenores de los servicios que se vayan a contratar. Esto
                    te permitir?? contar con{" "}
                    <b> informaci??n escrita y correcta</b>, evitando malos
                    entendidos.
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    Es importante <b> que dejes una opini??n </b> sobre el
                    usuario que te prest?? el servicio, ya que esto nos ayuda a
                    crecer como comunidad. <p className="">Tanto si el resultado fue positivo o
                      no, queremos saber tu experiencia con el servicio que
                      contrataste. De esta forma, ayud??s, por un lado, a otras personas a elegir
                      con mayor confianza, y por el otro, al profesional que lograr?? conseguir m??s clientes y m??s trabajo.
                    </p></li>{" "}
                  <li className="mt-3 text-left px-5 ">
                    Antes de realizar cualquier pago o confirmar una contrataci??n, asegurate que el
                    <b> presupuesto contemple </b> todo lo necesario para la realizaci??n del trabajo/s.
                  </li>
                  <li className="mt-3 text-left px-5 ">
                    Respet?? y hac?? cumplir las medidas de prevenci??n necesarias para evitar contagios de
                    COVID-19.
                  </li>
                </div>

                <div className="flex items-center justify-end   rounded-b">
                  <button
                    className="mb-5 mr-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <Link to={`/profile/${user?.id}`} className="flex ml-auto">
                      <button className="flex ml-auto font-bold text-white bg-indigo-500 border-0 py-3 px-12 focus:outline-none hover:bg-green-600 rounded">
                        Continuar
                      </button>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default SafeTips;
