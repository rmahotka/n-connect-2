<template>
  <div class="error-page">
    <div class="overlay">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Page Not Found
                </li>
              </ol>
            </nav>
            <h2>404 Error</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="error-page-content shadow bg-white p-4">
              <h5>Page you are looking for is not found</h5>
              <p>
                It may have been moved, or removed altogether. Perhaps you can
                return back to the site's homepage.
              </p>
              <h5>Or Search Here</h5>
              <form action="action.php" class="error-search-form clearfix">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    placeholder="Your Search Query"
                    class="form-control"
                  />
                  <button class="btn btn-primary" type="submit">Go</button>
                </div>
              </form>
              <router-link to="/" class="btn btn-secondary"
                >Back to Homepage</router-link
              >
            </div>
          </div>
          <div class="col-md-5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script serup></script>
