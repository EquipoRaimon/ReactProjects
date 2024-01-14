import imagenes from "../assets/imagenes";


export default function Cuadros({ weather, num, diaSemana }) {
    return (
        <>
            {typeof weather.city !== "undefined" ? (
                <div className="card bg-white bg-opacity-50 mx-2">
                    <div className="ciudad">
                        <h3>{diaSemana}</h3>
                    </div>
                    <div>
                        <div>
                            {typeof weather.list != "undefined" ?
                                <div>
                                    {weather.list[num].weather[0].main == "Snow" ?
                                        <img id="lluvia" src={imagenes.img3} className="card-img-top" />
                                        :
                                        ' '
                                    }
                                </div>
                                :
                                ' '
                            }
                            {typeof weather.list != "undefined" ?
                                <div>
                                    {weather.list[num].weather[0].main == "Rain" ?
                                        <img id="lluvia" src={imagenes.img2} className="card-img-top" />
                                        :
                                        ' '
                                    }
                                </div>
                                :
                                ' '
                            }
                            {typeof weather.list != "undefined" ?
                                <div>
                                    {weather.list[num].weather[0].main == "Clouds" ?
                                        <img id="lluvia" src={imagenes.img5} className="card-img-top" />
                                        :
                                        ' '
                                    }
                                </div>
                                :
                                ' '
                            }
                            {typeof weather.list != "undefined" ?
                                <div>
                                    {weather.list[num].weather[0].main == "Clear" ?
                                        <img id="lluvia" src={imagenes.img1} className="card-img-top" />
                                        :
                                        ' '
                                    }
                                </div>
                                :
                                ' '
                            }
                            {typeof weather.list != "undefined" ?
                                <div>
                                    {weather.list[num].weather[0].main == "Storm" ?
                                        <img id="lluvia" src={imagenes.img4} className="card-img-top" />
                                        :
                                        ' '
                                    }
                                </div>
                                :
                                ' '
                            }
                        </div>
                    </div>
                    <div className="tiempo mt-4">
                        {typeof weather.list != "undefined" ? (
                            <h4>{weather.list[num].main.temp}</h4>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="tiempo mt-2">
                        {typeof weather.list != "undefined" ? (
                            <h4>{weather.list[num].weather[0].main}</h4>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    )
}