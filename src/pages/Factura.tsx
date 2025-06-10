import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { platos, extras, bebidas } from "../data/menudata";

interface Pedido {
  cliente: string;
  platoFuerte: string;
  opcionales: string[];
  bebida: string;
  fecha: string;
}

const Factura: React.FC = () => {
  const navigate = useNavigate();
  const [pedido, setPedido] = useState<Pedido | null>(null);

  useEffect(() => {
    const pedidoGuardado = localStorage.getItem("pedido");
    if (pedidoGuardado) {
      const datos: Pedido = JSON.parse(pedidoGuardado);
      setPedido(datos);

      const timeout = setTimeout(() => {
        localStorage.removeItem("pedido");
        navigate("/combos");
      }, 10000); // 10 segundos

      return () => clearTimeout(timeout);
    } else {
      navigate("/combos");
    }
  }, [navigate]);

  if (!pedido) return null;

  const getPrecio = (nombre: string, lista: { nombre: string; precio: number }[]) => {
    const item = lista.find((i) => i.nombre === nombre);
    return item ? item.precio : 0;
  };

  const precioPlato = getPrecio(pedido.platoFuerte, platos);
  const preciosExtras = pedido.opcionales.map((op) => ({
    nombre: op,
    precio: getPrecio(op, extras),
  }));
  const precioBebida = getPrecio(pedido.bebida, bebidas);

  const subtotal = precioPlato + precioBebida + preciosExtras.reduce((sum, e) => sum + e.precio, 0);
  const impuesto = Math.round(subtotal * 0.15);
  const total = subtotal + impuesto;

  const fechaFormateada = new Date(pedido.fecha).toLocaleString("es-CR");

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        Universidad Técnica Nacional
      </h2>
      <h3 className="text-xl font-semibold text-center mb-2">
        Sistema Integrado de Sodas Universitaria
      </h3>

      <div className="border border-gray-400 p-4 rounded bg-white shadow">
        <p><strong>Factura:</strong> 00000001</p>
        <p><strong>Fecha:</strong> {fechaFormateada}</p>
        <p><strong>Cliente:</strong> {pedido.cliente}</p>

        <hr className="my-4" />

        <p><strong>Plato Fuerte:</strong> {pedido.platoFuerte} ¢{precioPlato}</p>

        <p><strong>Opcionales:</strong></p>
        <ul className="ml-4 list-disc">
          {preciosExtras.map((op) => (
            <li key={op.nombre}>
              {op.nombre} ¢{op.precio}
            </li>
          ))}
        </ul>

        <p className="mt-2"><strong>Bebida:</strong> {pedido.bebida} ¢{precioBebida}</p>

        <hr className="my-4" />

        <p><strong>Subtotal:</strong> ¢{subtotal}</p>
        <p><strong>Impuestos (15% IVA):</strong> ¢{impuesto}</p>
        <p className="text-lg font-bold"><strong>Total:</strong> ¢{total}</p>
      </div>

      <p className="text-sm text-center mt-4">Redirigiendo automáticamente a combos en 10 segundos...</p>
    </div>
  );
};

export default Factura;
