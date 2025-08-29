import Home from '../components/Home';

export default function HomePage({ onNavigate }) {
  return (
    <div>
      <Home onNavigate={onNavigate} />
    </div>
  );
}