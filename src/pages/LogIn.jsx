/**
 * The LogIn function renders a section with a Header component, a RegisterCard component for logging
 * in, and a Cards component.
 * @returns The `LogIn` component is being returned, which includes the `Header`, `RegisterCard`, and
 * `Cards` components. The `RegisterCard` component is customized with a background color, title, title
 * color, and padding.
 */
import Header from "../dashboard/Header";
import Cards from "../dashboard/Cards";
import RegisterCard from "../components/Register";

export default function LogIn() {
  const titleRegister = 'Iniciar Sesión'
  return (
    <section>
      <Header />
      <RegisterCard background='#EC6F2D' title={titleRegister} titleColor='#fff' paddingBottom='80px' />
      <Cards />
    </section>
  )
}