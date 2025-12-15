'use client';

const products = [
  {
    img: 'https://pbs.twimg.com/media/GcEOWQyWkAAsqxP?format=jpg&name=large',
    name: 'Fato Palanca',
  },
  {
    img: 'https://pbs.twimg.com/media/GNZFc_bWYAAqRNa?format=jpg&name=large',
    name: 'Camisola NOSSO',
  },
  {
    img: 'https://pbs.twimg.com/media/GO3P-boXIAArLy2?format=jpg&name=large',
    name: 'Camisola Cinza',
  },
  {
    img: 'https://pbs.twimg.com/media/GJXctM-WAAAruEK?format=jpg&name=large',
    name: 'Casaco NOSSO',
  },
];

export default function Products() {
  function openImage(src) {
    const overlay = document.createElement('div');
    overlay.className = 'image-modal';

    const img = document.createElement('img');
    img.src = src;

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    overlay.onclick = () => document.body.removeChild(overlay);
  }

  return (
    <section className="container my-5">
      <div className="row g-4">
        {products.map((p, i) => (
          <div className="col-md-3 col-6" key={i}>
            <figure>
              <img src={p.img} onClick={() => openImage(p.img)} />
              <figcaption>{p.name}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
