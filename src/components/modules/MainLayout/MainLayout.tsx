import Nav from '../../elements/header/Header';

type Props = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
