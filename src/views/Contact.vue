<template>
	<div class="contact-area bg-light">
	  <div class="container">
		<div class="row">
		  <div class="col-md-8">
			<div class="location-card mb-4 shadow">
			  <img src="/contact/location.jpg" alt="location" class="img-fluid" />
			  <div class="overlay"></div>
			  <div class="location-info">
				<h6 class="mb-1">Hall Of Fame</h6>
				<h4 class="mb-0">49 West 32nd Street, New York</h4>
			  </div>
			  <span class="map-trigger">
				<i class="fa fa-map-marker"></i>
			  </span>
			  <div class="google-map-area">
				<div id="map" class="map"></div>
				<span class="map-close"><i class="fa fa-close"></i></span>
			  </div>
			</div>
		  </div>
		  <div class="col-md-4">
			<div class="contact-info shadow mb-4 bg-white">
			  <h4 class="mb-4">Contact Info</h4>
			  <div class="row">
				<div class="col-5">
				  <img src="/contact/cp1.jpg" alt="contact" class="img-fluid" />
				</div>
				<div class="col-7">
				  <h6 class="mb-1">Ruby Martin</h6>
				  <span class="p-like">Organizer</span>
				  <ul class="list-unstyled">
					<li>+02 596 355 32</li>
					<li>ruby@evemate.com</li>
				  </ul>
				</div>
			  </div>
			  <div class="row mt-3">
				<div class="col-5">
				  <img src="/contact/cp2.jpg" alt="contact" class="img-fluid" />
				</div>
				<div class="col-7">
				  <h6 class="mb-1">Ella Robinson</h6>
				  <span class="p-like">Planer</span>
				  <ul class="list-unstyled">
					<li>+02 596 355 32</li>
					<li>ella@evemate.com</li>
				  </ul>
				</div>
			  </div>
			</div>
		  </div>
		</div>
		<div class="row">
		  <div class="col-md-12">
			<div class="contact-form shadow mb-4 bg-white">
			  <h4 class="mb-4">Drop Us A Line</h4>
			  <form action="action.php">
				<div class="row">
				  <div class="col-md-4">
					<div class="form-floating mb-3">
					  <input class="form-control" type="text" name="Your-name" id="Your-name" placeholder="Your Name" />
					  <label for="Your-name">Your Name</label>
					</div>
				  </div>
				  <div class="col-md-4">
					<div class="form-floating mb-3">
					  <input class="form-control" type="text" name="Your_Subject" id="Your_Subject" placeholder="Your Subject" />
					  <label for="Your_Subject">Your Subject</label>
					</div>
				  </div>
				  <div class="col-md-4">
					<div class="form-floating mb-3">
					  <input class="form-control" type="email" name="Your_Email" id="Your_Email" placeholder="Your Email" />
					  <label for="Your_Email">Your Email</label>
					</div>
				  </div>
				</div>
				<div class="row">
				  <div class="col-md-12">
					<div class="form-floating mb-3">
					  <textarea class="form-control" name="some-text" id="some-text" placeholder="Your Message"></textarea>
					  <label for="some-text">Your Message</label>
					</div>
				  </div>
				</div>
				<div class="row">
				  <div class="col-md-12">
					<button type="submit" class="btn btn-primary">Submit</button>
				  </div>
				</div>
			  </form>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  