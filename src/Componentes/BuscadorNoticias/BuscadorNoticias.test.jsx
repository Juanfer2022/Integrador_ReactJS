import { fireEvent, render, waitFor } from "@testing-library/react";
import BuscadorNoticias from "./BuscadorNoticias";
const onBuscar = jest.fn();
const renderizarBuscadorNoticias = () => {
  const component = render(<BuscadorNoticias onBuscarNoticias={onBuscar} />);
  return component;
};

describe("<BuscadorNoticias/>", () => {
  test("Renderizar", () => {
    const component = renderizarBuscadorNoticias();
    expect(component.container).toBeInTheDocument();
  });

  test("Cuando se haga clic sobre el boton Buscar se debe llamar a onBuscar ", async () => {
    const component = renderizarBuscadorNoticias();
    const button = component.getByRole("button");
    const input = component.getByRole("searchbox").querySelector("input");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(button);

    waitFor(() => {
      expect(onBuscar).toBeCalledWith("test");
    });
  });
  test("Si no hay al menos 3 carateres no se llama onBuscar", async () => {
    const component = renderizarBuscadorNoticias();
    const button = component.getByRole("button");
    fireEvent.click(button);
    expect(onBuscar).toBeCalled();
  });
});
