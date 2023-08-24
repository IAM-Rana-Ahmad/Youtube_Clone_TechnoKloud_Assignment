import React from 'react'

export default function left() {
  return (
    <>
          <div className='d-flex hoverable w-100 mt-1'>
                            <span><i class="bi bi-house-door-fill fs-4 ms-4"></i></span>
                            <div className='ms-5'>
                                <a href="/" className='nav-link'> <p className='fs-5 '>Home</p></a>
                            </div>

                        </div>
                        <div className='d-flex  hoverable my-2'>
                            <span><i class="bi bi-compass fs-4 ms-4"></i></span>
                            <div className='ms-5'>
                                <a href="/" className='nav-link'> <p className='fs-5 '>Explore</p></a>
                            </div>

                        </div>
                        <div className='d-flex  hoverable'>
                            <span><i class="bi bi-youtube fs-4 ms-4"></i></span>
                            <div className='ms-5'>
                                <a href="/" className='nav-link'> <p className='fs-5 '>Shorts</p></a>
                            </div>

                        </div>
                        <div className='d-flex my-2  hoverable'>
                            <span><i class="bi bi-collection-play-fill fs-4 ms-4"></i></span>
                            <div className='ms-5'>
                                <a href="/" className='nav-link'> <p className='fs-5 '>Subscription</p></a>
                            </div>

                        </div><hr />

                        <div className='d-flex  hoverable'>
                            <span><i class="bi bi-caret-right-square fs-4 ms-4"></i></span>
                            <div className='ms-5'>
                                <a href="/" className='nav-link'> <p className='fs-5 '>Library</p></a>
                            </div>

                        </div>

                        <div className='d-flex my-2  hoverable'>
                            <span><i class=" bi bi-clock-history fs-4 ms-4"></i></span>
                            <div className='ms-5'>
                                <a href="/" className='nav-link'> <p className='fs-5 '>History</p></a>
                            </div>

                        </div>

                        <div class="accordion shadow" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button fs-4 text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        SIGN IN
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <button className="btn btn-outline-primary d-flex btn-lg px-3" style={{ borderRadius: '0' }}>
                                            <span><i className="bi bi-person-circle px-2"></i></span>SIGN IN
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <hr />


                        <p className='fs-4 text-secondary mx-md-4'>Best of Youtube</p>
                        <div className='d-flex'>
                            <span><i class=" bi bi-music-note-beamed fs-5 ms-4 bg-dark text-white p-2" style={{ borderRadius: "20px" }}></i></span>
                            <div className='ms-5'>
                                <a href="/" className='nav-link'> <p className='fs-5 '>Music</p></a>
                            </div>

                        </div>


                        <div className='d-flex my-2'>
                            <span><i class=" bi bi-trophy fs-5 ms-4 bg-dark text-white p-2" style={{ borderRadius: "20px" }}></i></span>
                            <div className='ms-5'>
                                <a href="/" className='nav-link'> <p className='fs-5 '>Sports</p></a>
                            </div>

                        </div>



                        <div className='d-flex'>
                            <span><i class=" bi bi-controller fs-5 ms-4 bg-dark text-white p-2" style={{ borderRadius: "20px" }}></i></span>
                            <div className='ms-5'>
                                <a href="/" className='nav-link'> <p className='fs-5 '>Gaming</p></a>
                            </div>

                        </div>



                        <div className='d-flex my-2'>
                            <span><i class=" bi bi-film fs-5 ms-4 bg-dark text-white p-2" style={{ borderRadius: "20px" }}></i></span>
                            <div className='ms-5'>
                                <a href="/" className='nav-link'> <p className='fs-5 '>Movies</p></a>
                            </div>

                        </div>




                        <div className='d-flex'>
                            <span><i class=" bi bi-newspaper fs-5 ms-4 bg-dark text-white p-2" style={{ borderRadius: "20px" }}></i></span>
                            <div className='ms-5'>
                                <a href="/" className='nav-link'> <p className='fs-5 '>News</p></a>
                            </div>

                        </div>
    </>
  )
}
