import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { platos, extras, bebidas, combos } from "../data/menudata";

const Combos: React.FC = () => {
  const navigate = useNavigate();

  const [cliente, setCliente] = useState<string>("");
  const [platoFuerte, setPlatoFuerte] = useState<string>("");
  const [opcionales, setOpcionales] = useState<string[]>([]);
  const [bebida, setBebida] = useState<string>("");
  const [subtotal, setSubtotal] = useState<number>(0);

  // Actualiza el subtotal en tiempo real
  useEffect(() => {
    let total = 0;

    const plato = platos.find((p) => p.nombre === platoFuerte);
    if (plato) total += plato.precio;

    opcionales.forEach((op) => {
      const extra = extras.find((e) => e.nombre === op);
      if (extra) total += extra.precio;
    });

    const bebidaSel = bebidas.find((b) => b.nombre === bebida);
    if (bebidaSel) total += bebidaSel.precio;

    setSubtotal(total);
  }, [platoFuerte, opcionales, bebida]);

  const handleComboSelect = (comboNum: number) => {
    const combo = combos[comboNum];
    setPlatoFuerte(combo.plato);
    setOpcionales(combo.opcionales);
    setBebida(combo.bebida);
  };

  const toggleOpcional = (item: string) => {
    setOpcionales((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const handleCancelar = () => {
    setCliente("");
    setPlatoFuerte("");
    setOpcionales([]);
    setBebida("");
  };

  const handleAceptar = () => {
    if (!cliente || !platoFuerte || !bebida) {
      alert("Por favor complete todos los campos obligatorios.");
      return;
    }

    const pedido = {
      cliente,
      platoFuerte,
      opcionales,
      bebida,
      fecha: new Date().toISOString(),
    };

    localStorage.setItem("pedido", JSON.stringify(pedido));
    navigate("/factura");
  };

  return (
    <div className="container mt-5 mb-5 pb-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Orden de Servicio</h2>

          {/* Cliente */}
          <div className="mb-3">
            <label className="form-label fw-bold">Cliente:</label>
            <input
              type="text"
              className="form-control"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              required
              placeholder="Ingrese su nombre"
            />
          </div>

          {/* Combos */}
          <div className="mb-4">
            <label className="form-label fw-bold">Seleccionar Combo:</label>
            <div className="d-flex gap-3">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => handleComboSelect(num)}
                  className="btn btn-outline-primary"
                >
                  COMBO {num}
                </button>
              ))}
            </div>
          </div>

          {/* Plato Fuerte */}
          <div className="mb-3">
            <label className="form-label fw-bold">Plato Fuerte:</label>
            <select
              className="form-select"
              value={platoFuerte}
              onChange={(e) => setPlatoFuerte(e.target.value)}
            >
              <option value="">Seleccione uno</option>
              {platos.map((p) => (
                <option key={p.nombre} value={p.nombre}>
                  {p.nombre}
                </option>
              ))}
            </select>
          </div>

          {/* Opcionales */}
          <div className="mb-3">
            <label className="form-label fw-bold">Opcionales:</label>
            {extras.map((op) => (
              <div key={op.nombre} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={opcionales.includes(op.nombre)}
                  onChange={() => toggleOpcional(op.nombre)}
                  id={op.nombre}
                />
                <label className="form-check-label" htmlFor={op.nombre}>
                  {op.nombre}
                </label>
              </div>
            ))}
          </div>

          {/* Bebidas */}
          <div className="mb-4">
            <label className="form-label fw-bold">Bebida:</label>
            {bebidas.map((b) => (
              <div key={b.nombre} className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="bebida"
                  value={b.nombre}
                  checked={bebida === b.nombre}
                  onChange={() => setBebida(b.nombre)}
                  id={b.nombre}
                />
                <label className="form-check-label" htmlFor={b.nombre}>
                  {b.nombre}
                </label>
              </div>
            ))}
          </div>

          {/* Botones */}
          <div className="d-flex justify-content-center gap-4 mt-4">
            <button
              onClick={handleCancelar}
              className="btn btn-danger px-4"
            >
              CANCELAR
            </button>
            <button
              onClick={handleAceptar}
              className="btn btn-primary px-4"
            >
              ACEPTAR
            </button>
          </div>
        </div>
      </div>

      {}
      <div
      className="bg-light border-top fixed-bottom text-center py-4 shadow-lg fs-4 fw-bold"
      style={{ zIndex: 1050 }}
      >
        Subtotal: ₡{subtotal}
        </div>
    </div>
  );
};

export default Combos;
