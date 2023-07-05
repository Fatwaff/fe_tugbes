export let DetailProyek = `

<div class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                  <div class="mt-2 mb-8 w-full">
                    <h4 class="px-2 text-xl font-bold text-navy-700 dark:text-white">#TIPEPROYEK#</h4>
                    <p class="mt-2 px-2 text-base text-gray-600">Judul: #JUDUL#</p>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 w-full">
                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600">Nama, Npm & Kelas mahasiswa</p>
                      <p class="text-base font-medium text-navy-700 dark:text-white">#NAMA#</p>
                      <p class="text-base font-medium text-navy-700 dark:text-white">#NPM#</p>
                      <p class="text-base font-medium text-navy-700 dark:text-white">#KELAS#</p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600">Nama, Npm & Kelas partner</p>
                      <p class="text-base font-medium text-navy-700 dark:text-white">#NAMAPARTNER#</p>
                      <p class="text-base font-medium text-navy-700 dark:text-white">#NPMPARTNER#</p>
                      <p class="text-base font-medium text-navy-700 dark:text-white">#KELASPARTNER#</p>
                    </div>

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600">Dosen Pembimbing</p>
                      <p class="text-base font-medium text-navy-700 dark:text-white">#NAMADOSPEM#</p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600">Dosen Penguji</p>
                      <p class="text-base font-medium text-navy-700 dark:text-white">#NAMADOSUJI#</p>
                    </div>

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600">Tanggal Sidang</p>
                      <p class="text-base font-medium text-navy-700 dark:text-white">#TANGGALSIDANG#</p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600">Ruangan Sidang</p>
                      <p id="ruangsidang" class="text-base font-medium text-navy-700 dark:text-white">#RUANGSIDANG#</p>
                    </div>
                  </div>
                </div>`;
