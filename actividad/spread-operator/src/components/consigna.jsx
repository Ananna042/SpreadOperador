export default function Productos() {
  const productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
  ];

  const productosConDescuento = productos.map(p => ({
    ...p,
    precio: p.precio * 0.9,
    descuento: true,
  }));

  return (
    <>
      {productosConDescuento.map((p, i) => (
        <p key={i}>
          {p.nombre} - ${p.precio} - {p.descuento ? "Descuento: sí" : "No"}
        </p>
      ))}
    </>
  );
}
