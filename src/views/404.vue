<template>
  <div>
    <div class="overlay pb-12">
      <div class="container mx-auto">
        <div class="flex flex-wrap justify-between">
          <div>
            <h2 class="font-bold text-6xl text-white">404 Error</h2>
            <p class="text-black font-bold text-2xl mb-4">Page Not Found</p>
            <router-link
              to="/"
              class="text-black bg-white border-2 rounded-xl p-2 transition-all block w-full font-semibold hover:bg-inherit hover:text-white"
              >Back to Homepage</router-link
            >
          </div>
          <div class="flex">
            <div class="shadow bg-white p-4">
              <h5 class="text-2xl font-bold text-black mb-3">
                Page you are looking for is not found
              </h5>
              <p class="font-lg">
                It may have been moved, or removed altogether. Perhaps you can
                return back to the site's homepage.
              </p>
              <h5 class="text-xl font-bold text-black mb-3">Or Search Here</h5>
              <form action="action.php" class="error-search-form flex">
                <input
                  type="text"
                  placeholder="Your Search Query"
                  class="form-control"
                />
                <button
                  class="border-2 border-purple-700 text-purple-700 transition-all font-bold hover:bg-purple-800 hover:text-white px-3"
                  type="submit"
                >
                  Go
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script serup></script>
