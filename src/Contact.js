import React from 'react'

export default function Contact() {
  return (
      <div>

        <section className="section">
            <div className="container">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Feel free to reach out!</h5>
                                <hr />
                                <div className="form-group">
                                    <label className="mb-1">Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Your Name"></input>
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">Email</label>
                                    <input type="text" className="form-control" placeholder="Enter Your Email"></input>
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">Message</label>
                                    <textarea rows="4" className="form-control" placeholder="Enter Your Message"></textarea>
                                </div>
                                <div className="form-group py-3">
                                    <button type="button " className="btn btn-primary shadow w-100">Send</button>
                                </div>
                            </div>
                            <div className="col-md-6 border-start">
                                <h5 className="main-heading">My Contact Information</h5>
                                <p>
                                    Email: apunj04@gmail.com | apunj@unc.edu
                                </p>
                                <p>
                                    Phone: (919)400-1149
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
  )
}