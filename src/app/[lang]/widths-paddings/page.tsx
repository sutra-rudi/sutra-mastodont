export default function MjerePage() {
  return (
    <main className='bg-primarna-svijetla min-h-[724px]'>
      <h2>STRANICA</h2>
      <div className='w-full bg-green-200 max-w-[1200px] min-h-[720px] h-full mx-auto '>
        <h2>KONTEJNER</h2>
        <div className=' flex place-items-center sm:justify-center justify-start gap-4 px-4 lg:flex-nowrap flex-wrap'>
          <div className='w-24 h-24 bg-red-400'></div>
          <div className='w-24 h-24 bg-red-400'></div>
          <div className='w-24 h-24 bg-red-400'></div>
          <div className='w-24 h-24 bg-red-400'></div>
        </div>
      </div>
    </main>
  );
}
