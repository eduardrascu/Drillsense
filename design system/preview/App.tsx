import WellProfile from '@screens/WellProfile';
import WellComparison from '@screens/WellComparison';

// Pick the screen from the URL: ?screen=comparison → WellComparison, otherwise WellProfile.
// So both can be viewed at once in separate tabs (same dev server, different URL).
export default function App() {
  const screen = new URLSearchParams(window.location.search).get('screen');
  return screen === 'comparison' ? <WellComparison /> : <WellProfile />;
}
