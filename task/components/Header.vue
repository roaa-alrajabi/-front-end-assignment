<template>
  <div>
    <header class="main-header flex justify-around">
      <!-- start left side of header -->
      <div class="flex ml-20 mt-2 mb-3">
        <img src="../assets/image/linkedin.png" class="h-10 w-10" alt="log for linkedin webite" />
        <label>
          <input
            class="rounded placeholder:text-slate-400 block bg-[#eef3f8] w-80 py-2 mx-4 mt-1 px-2 sm:text-sm"
            placeholder="search"
            type="text"
            name="search"
          />
        </label>
      </div>
      <!-- end left side of header -->

      <!-- start right side of header -->
      <nav class="main-nav">
        <ul class="main-nav-list flex">
          <li class="mt-2 mx-2 text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match mx-2"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"
              />
            </svg>
            <a href="#">Home</a>
          </li>
          <li class="mt-2 mx-2 text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match mx-8"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"
              />
            </svg>
            <a href="#">My NetWork</a>
          </li>
        </ul>
      </nav>
      <!-- end right side of header -->
    </header>
  </div>
</template>

<script>
</script>