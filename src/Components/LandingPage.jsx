import React,{useEffect,useState,useMemo,useCallback} from 'react'
import {Button,Carousel} from 'react-bootstrap'


import '../App.css'

const LandingPage=()=> {

  const [search,setSearch]=useState("")


  return (
    <>
    <div>

 
        
<header>
<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
<div className="container-fluid">
<a className="navbar-brand" href="#">Carousel</a>
<button aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarCollapse" data-bs-toggle="collapse" type="button">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarCollapse">
<ul className="navbar-nav me-auto mb-2 mb-md-0">
<li className="nav-item">
<a aria-current="page" className="nav-link active" href="#">Home</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Link</a>
</li>
<li className="nav-item">
<a aria-disabled="true" className="nav-link disabled" href="#" tabindex="-1">Disabled</a>
</li>
</ul>

<form className="d-flex">

<input value={search} onChange={(e)=>{
    setSearch(e.target.value);
    console.log(e.target.value)
}}  className="form-control me-2" placeholder="Search" type="search"/>
<button className="btn btn-outline-success" type="submit">Search</button>
</form>
</div>
</div>
</nav>
</header>
<main>





<div className="container_marketing">

<div className="row">
<div className="col-lg-4">
<svg aria-label="Placeholder: 140x140" className="bd-placeholder-img rounded-circle" focusable="false" height="140" preserveaspectratio="xMidYMid slice" role="img" width="140" xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title><rect fill="#777" height="100%" width="100%"></rect><text dy=".3em" fill="#777" x="50%" y="50%">140x140</text></svg>
<h2>Heading</h2>
<p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
<p><a className="btn btn-secondary" href="#">View details </a></p>
</div>
<div className="col-lg-4">
<svg aria-label="Placeholder: 140x140" className="bd-placeholder-img rounded-circle" focusable="false" height="140" preserveaspectratio="xMidYMid slice" role="img" width="140" xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title><rect fill="#777" height="100%" width="100%"></rect><text dy=".3em" fill="#777" x="50%" y="50%">140x140</text></svg>
<h2>Heading</h2>
<p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
<p><a className="btn btn-secondary" href="#">View details </a></p>
</div>
<div className="col-lg-4">
<svg aria-label="Placeholder: 140x140" className="bd-placeholder-img rounded-circle" focusable="false" height="140" preserveaspectratio="xMidYMid slice" role="img" width="140" xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title><rect fill="#777" height="100%" width="100%"></rect><text dy=".3em" fill="#777" x="50%" y="50%">140x140</text></svg>
<h2>Heading</h2>
<p>And lastly this, the third column of representative placeholder content.</p>
<p><a className="btn btn-secondary" href="#">View details </a></p>
</div>
</div>

<hr className="featurette-divider"/>
<Carousel className="Carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fbear-illustration&psig=AOvVaw2BnM1zWqOz73yPzyQNmZhj&ust=1681856592640000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIC-pP_5sf4CFQAAAAAdAAAAABAE"
          alt="First slide"
        />
        <Carousel.Caption>

        <h1>Hallo</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fbear-illustration&psig=AOvVaw2BnM1zWqOz73yPzyQNmZhj&ust=1681856592640000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIC-pP_5sf4CFQAAAAAdAAAAABAE"
          alt="Second slide"
        />

        <Carousel.Caption>
        
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


<hr className="featurette-divider"/>
<div className="row featurette">
<div className="col-md-7">
<h2 className="featurette-heading">First featurette heading. <span className="text-muted">Itll blow your mind.</span></h2>
<p classNameName="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
</div>
<div classNameName="col-md-5">
<svg aria-label="Placeholder: 500x500" classNameName="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" focusable="false" height="500" preserveaspectratio="xMidYMid slice" role="img" width="500" xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title><rect fill="#eee" height="100%" width="100%"></rect><text dy=".3em" fill="#aaa" x="50%" y="50%">500x500</text></svg>
</div>
</div>
<hr classNameName="featurette-divider"/>
<div classNameName="row featurette">
<div classNameName="col-md-7 order-md-2">
<h2 classNameName="featurette-heading">Oh yeah, its that good. <span classNameName="text-muted">See for yourself.</span></h2>
<p classNameName="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
</div>
<div classNameName="col-md-5 order-md-1">
<svg aria-label="Placeholder: 500x500" classNameName="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" focusable="false" height="500" preserveaspectratio="xMidYMid slice" role="img" width="500" xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title><rect fill="#eee" height="100%" width="100%"></rect><text dy=".3em" fill="#aaa" x="50%" y="50%">500x500</text></svg>
</div>
</div>
<hr classNameName="featurette-divider"/>
<div classNameName="row featurette">
<div classNameName="col-md-7">
<h2 classNameName="featurette-heading">And lastly, this one. <span classNameName="text-muted">Checkmate.</span></h2>
<p classNameName="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
</div>
<div classNameName="col-md-5">
<svg aria-label="Placeholder: 500x500" classNameName="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" focusable="false" height="500" preserveaspectratio="xMidYMid slice" role="img" width="500" xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title><rect fill="#eee" height="100%" width="100%"></rect><text dy=".3em" fill="#aaa" x="50%" y="50%">500x500</text></svg>
</div>
</div>
<hr classNameName="featurette-divider"/>

</div>

<footer classNameName="container">
<p className="float-end"><a href="#">Back to top</a></p>
<p> 20172021 Company, Inc.  <a href="#">Privacy</a>  <a href="#">Terms</a></p>
</footer>
</main>







    
    
    </div>
    </>
  )
}

export default LandingPage