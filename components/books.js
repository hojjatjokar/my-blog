const list = [
  {
    title: 'Algorithms',
    link: 'https://algo.hojjat.dev',
    bg: 'bg-red-500'
  },
  {
    title: 'Use',
    link: 'https://use.hojjat.dev',
    bg: 'bg-yellow-500'
  },
  {
    title: 'Built-ins',
    link: 'https://built-in-js.hojjat.dev',
    bg: 'bg-green-400'
  },
  {
    title: 'Built-ins',
    link: 'https://built-in-js.hojjat.dev',
    bg: 'bg-blue-400'
  },
  {
    title: 'Built-ins',
    link: 'https://built-in-js.hojjat.dev',
    bg: 'bg-indigo-400'
  }
];

function Books(){
  return(
    <section className="grid gap-4 grid-cols-3 md:grid-cols-4 pb-4">
      {
        list.map(({title, link, bg}) => (
          <a key={title} href={link} className={`${bg} rounded-2xl p-4	`}>
            <p className="text-white text-center">{title}</p>
          </a>
        ))
      } 
    </section>
  )
}

export default Books;
