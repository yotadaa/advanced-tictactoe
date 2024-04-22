import GameField from './components/GameField';

export default function Home() {

  return (
    <main className="flex justify-center items-center h-screen w-screen bg-emerald-300">
      <GameField player={3} />
    </main >
  );
}
