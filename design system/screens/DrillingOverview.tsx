import styled from 'styled-components';
import { colors } from '@src/themes';
import { Button } from '@src/components/Button';
import { Badge } from '@src/components/Badge';
import { ProgressBar } from '@src/components/ProgressBar';
import { Avatar } from '@src/components/Avatar';
import { Typography } from '@src/components/Typography';
import type { BagdeTypes } from '@src/components/Badge/types';

/* ------------------------------------------------------------------ *
 * Drilling Locations Overview
 * Built from the FuseDash DS primitives (Badge, ProgressBar, Avatar,
 * Button, Typography) on a themed dark shell. Every color traces to
 * tokens.ts (teal) — no hardcoded brand hexes.
 * ------------------------------------------------------------------ */

// dark surface scale + accents, all from the DS token set (tokens.ts)
const t = {
  canvas: colors.ui.gray['14'],   // #0B0B0B
  surface: colors.ui.gray['13'],  // #181818
  surface2: colors.ui.gray['12'], // #1B1B1B
  border: colors.transparent.white['8%'],
  borderStrong: colors.transparent.white['12%'],
  ink: colors.ui.gray['01'],
  ink2: colors.ui.gray['04'],
  ink3: colors.ui.gray['06'],
  ink4: colors.ui.gray['07'],
  teal: colors.ui.indigo['07'],   // #007EB0 (brand)
  tealHi: colors.ui.indigo['06'], // #3398C0
  drilling: colors.ui.green['05'],
  tripping: colors.ui.yellow['04'],
  idle: colors.ui.gray['06'],
  alert: colors.ui.red['06'],
};

// earthy formation tints for the borehole (geology, not brand)
const STRATA = ['#C9A66B', '#8A7E6B', '#B98A4B', '#9AA39A', '#3E6B7A'];

type Status = 'drilling' | 'tripping' | 'idle' | 'maintenance';

interface Loc {
  well: string; field: string; rig: string; status: Status;
  md: number; td: number; rop: number; mw: number; crew: string; eta: string;
}

const LOCATIONS: Loc[] = [
  { well: 'Eagle Ford 04-H', field: 'Eagle Ford · TX',    rig: 'Rig 18', status: 'drilling',    md: 16540, td: 17200, rop: 48, mw: 12.1, crew: 'Alpha',   eta: '4h 50m' },
  { well: 'Aurora 12-H',     field: 'Midland Basin · TX',  rig: 'Rig 07', status: 'drilling',    md: 14250, td: 18000, rop: 62, mw: 11.2, crew: 'Bravo',   eta: '2d 14h' },
  { well: 'Bakken Pad 7-3',  field: 'Williston · ND',      rig: 'Rig 22', status: 'tripping',    md: 9800,  td: 11500, rop: 0,  mw: 10.6, crew: 'Delta',   eta: '1d 06h' },
  { well: 'Anadarko 15-H',   field: 'Anadarko · OK',       rig: 'Rig 11', status: 'drilling',    md: 10120, td: 15800, rop: 71, mw: 9.8,  crew: 'Charlie', eta: '3d 08h' },
  { well: 'Delaware 88-A',   field: 'Delaware Basin · NM', rig: 'Rig 04', status: 'maintenance', md: 12900, td: 19500, rop: 0,  mw: 11.9, crew: 'Echo',    eta: '—' },
  { well: 'Marcellus 21-X',  field: 'Appalachian · PA',    rig: 'Rig 31', status: 'idle',        md: 6200,  td: 13000, rop: 0,  mw: 10.1, crew: '—',       eta: '—' },
];

const STATUS_LABEL: Record<Status, string> = {
  drilling: 'Drilling', tripping: 'Tripping', idle: 'Idle', maintenance: 'Maintenance',
};
const STATUS_BADGE: Record<Status, BagdeTypes> = {
  drilling: 'success', tripping: 'warning', idle: 'default', maintenance: 'error',
};
const STATUS_DOT: Record<Status, string> = {
  drilling: t.drilling, tripping: t.tripping, idle: t.idle, maintenance: t.alert,
};

const fmt = (n: number) => n.toLocaleString('en-US');

/* ----------------------------- layout ----------------------------- */

const Page = styled.div`
  min-height: 100vh;
  background: ${t.canvas};
  color: ${t.ink};
`;

const Topbar = styled.header`
  position: sticky; top: 0; z-index: 10;
  display: flex; align-items: center; justify-content: space-between;
  gap: 24px; height: 64px; padding: 0 24px;
  background: ${t.surface}cc;
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${t.border};
`;
const Brand = styled.div`
  display: flex; align-items: center; gap: 10px;
  font-weight: 600; font-size: 15px; letter-spacing: -0.01em;
`;
const Mark = styled.div`
  width: 28px; height: 28px; border-radius: 7px;
  background: linear-gradient(135deg, ${t.teal}, ${colors.ui.indigo['09']});
  box-shadow: 0 0 12px ${t.teal}66;
  display: flex; align-items: center; justify-content: center; color: #fff; font-size: 13px;
`;
const NavLinks = styled.nav`
  display: flex; gap: 4px;
  a { padding: 0 12px; height: 36px; display: flex; align-items: center; border-radius: 999px;
      font-size: 14px; font-weight: 600; color: ${t.ink2}; text-decoration: none; }
  a.active { color: ${t.ink}; background: ${t.surface2}; }
`;
const TopRight = styled.div` display: flex; align-items: center; gap: 12px; `;

const Main = styled.main`
  max-width: 1400px; margin: 0 auto; padding: 28px 24px 48px;
  display: flex; flex-direction: column; gap: 24px;
`;
const TitleRow = styled.div`
  display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap;
`;
const Crumb = styled.div` display: flex; gap: 8px; font-size: 12px; color: ${t.ink3}; margin-bottom: 6px; `;
const LivePill = styled.span`
  display: inline-flex; align-items: center; gap: 6px; margin-left: 12px;
  font-size: 11px; font-weight: 600; color: ${t.drilling};
  background: ${t.drilling}1a; border: 1px solid ${t.drilling}33;
  border-radius: 999px; padding: 4px 10px; vertical-align: middle;
  span { width: 6px; height: 6px; border-radius: 50%; background: ${t.drilling}; }
`;

const Panel = styled.section`
  background: ${t.surface};
  border: 1px solid ${t.border};
  border-radius: 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,.25), 0 8px 20px -6px rgba(0,0,0,.35);
  padding: 20px;
`;

/* --------------------------- fleet bar ---------------------------- */

const FleetRow = styled.div` display: flex; flex-wrap: wrap; align-items: center; gap: 24px; `;
const SegBar = styled.div`
  display: flex; height: 12px; border-radius: 999px; overflow: hidden; gap: 2px; margin: 10px 0 12px;
`;
const Seg = styled.div<{ $c: string; $w: number }>`
  width: ${(p) => p.$w}%; background: ${(p) => p.$c};
`;
const Legend = styled.div` display: flex; flex-wrap: wrap; gap: 8px 20px;
  .item { display: flex; align-items: center; gap: 8px; font-size: 13px; color: ${t.ink2}; }
  .sw { width: 10px; height: 10px; border-radius: 3px; }
  b { color: ${t.ink}; font-variant-numeric: tabular-nums; }
`;
const VLine = styled.div` width: 1px; align-self: stretch; background: ${t.border}; `;
const Metrics = styled.div` display: flex; gap: 28px; `;
const Metric = styled.div`
  .k { font-size: 12px; color: ${t.ink3}; }
  .v { font-size: 20px; font-weight: 600; margin-top: 2px; font-variant-numeric: tabular-nums; }
  .u { font-size: 13px; font-weight: 500; color: ${t.ink3}; }
`;

/* --------------------------- loc cards ---------------------------- */

const Grid = styled.div`
  display: grid; gap: 16px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 760px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 1180px) { grid-template-columns: repeat(3, 1fr); }
`;
const LocCard = styled.article`
  background: ${t.surface}; border: 1px solid ${t.border}; border-radius: 24px;
  padding: 20px; transition: border-color .15s;
  box-shadow: 0 2px 4px rgba(0,0,0,.25), 0 8px 20px -6px rgba(0,0,0,.35);
  &:hover { border-color: ${t.borderStrong}; }
`;
const CardHead = styled.div` display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; `;
const Body = styled.div` display: flex; gap: 18px; margin-top: 18px; `;

const Gauge = styled.div`
  position: relative; flex: none; width: 52px; height: 168px;
  border-radius: 14px; overflow: hidden; background: ${t.canvas};
  border: 1px solid ${t.border};
`;
const Strata = styled.div` position: absolute; inset: 0; display: flex; flex-direction: column; `;
const Band = styled.div<{ $c: string }>` flex: 1; background: ${(p) => p.$c}; opacity: .34; `;
const Mask = styled.div<{ $h: number }>`
  position: absolute; left: 0; right: 0; bottom: 0; height: ${(p) => p.$h}%;
  background: ${t.canvas}b8;
`;
const Bit = styled.div<{ $top: number; $active: boolean }>`
  position: absolute; left: 0; right: 0; top: ${(p) => p.$top}%; height: 2px;
  background: ${(p) => (p.$active ? p.theme && t.tealHi : t.ink4)};
  box-shadow: ${(p) => (p.$active ? `0 0 10px ${t.teal}` : 'none')};
`;
const GaugeCap = styled.div` text-align: center; margin-top: 8px;
  .p { font-size: 15px; font-weight: 600; font-variant-numeric: tabular-nums; }
  .l { font-size: 10px; color: ${t.ink4}; margin-top: 2px; }
`;
const Stats = styled.div`
  flex: 1; min-width: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 14px 12px;
  .k { font-size: 11px; color: ${t.ink3}; }
  .v { font-size: 15px; font-weight: 600; font-variant-numeric: tabular-nums; margin-top: 1px; }
  .u { font-size: 11px; font-weight: 500; color: ${t.ink3}; }
`;
const Foot = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  margin-top: 18px; padding-top: 16px; border-top: 1px solid ${t.border};
  font-size: 12px; color: ${t.ink3};
  .crew { display: flex; align-items: center; gap: 8px; }
  b { color: ${t.ink2}; }
`;

/* ----------------------------- view ------------------------------- */

export default function DrillingOverview() {
  const fleet = { drilling: 3, tripping: 1, idle: 1, maintenance: 1 };
  const total = 6;

  return (
    <Page>
      <Topbar>
        <Brand>
          <Mark>▲</Mark>
          Drillsense
        </Brand>
        <NavLinks>
          <a className="active" href="#">Overview</a>
          <a href="#">Map</a>
          <a href="#">Wells</a>
          <a href="#">Reports</a>
        </NavLinks>
        <TopRight>
          <Button label="Add location" variant="primary" size="md" />
          <Avatar userName="Robert Robertson" pictureAlt="RR" size="md" />
        </TopRight>
      </Topbar>

      <Main>
        <div>
          <Crumb><span>Operations</span><span style={{ color: t.ink4 }}>/</span><span style={{ color: t.ink2 }}>Permian Region</span></Crumb>
          <TitleRow>
            <div>
              <Typography type="heading" size="xl" weight="semibold">
                Drilling Locations
              </Typography>
              <LivePill><span /> LIVE</LivePill>
              <div style={{ marginTop: 6 }}>
                <Typography type="body" size="sm" color="weak">6 locations across 5 basins · last sync 12 sec ago</Typography>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button label="Permian" variant="secondary" size="md" />
              <Button label="Williston" variant="ghost" size="md" />
            </div>
          </TitleRow>
        </div>

        {/* fleet status */}
        <Panel>
          <FleetRow>
            <div style={{ flex: 1, minWidth: 300 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography type="body" size="sm" weight="semibold" color="weak">Rig fleet status</Typography>
                <Typography type="body" size="sm" color="weaker">{total} rigs deployed</Typography>
              </div>
              <SegBar>
                <Seg $c={t.drilling} $w={(fleet.drilling / total) * 100} />
                <Seg $c={t.tripping} $w={(fleet.tripping / total) * 100} />
                <Seg $c={t.idle} $w={(fleet.idle / total) * 100} />
                <Seg $c={t.alert} $w={(fleet.maintenance / total) * 100} />
              </SegBar>
              <Legend>
                <div className="item"><span className="sw" style={{ background: t.drilling }} />Drilling <b>{fleet.drilling}</b></div>
                <div className="item"><span className="sw" style={{ background: t.tripping }} />Tripping <b>{fleet.tripping}</b></div>
                <div className="item"><span className="sw" style={{ background: t.idle }} />Idle <b>{fleet.idle}</b></div>
                <div className="item"><span className="sw" style={{ background: t.alert }} />Maintenance <b>{fleet.maintenance}</b></div>
              </Legend>
            </div>
            <VLine />
            <Metrics>
              <Metric><div className="k">Avg ROP (active)</div><div className="v">60 <span className="u">ft/hr</span></div></Metric>
              <Metric><div className="k">Drilled today</div><div className="v" style={{ color: t.drilling }}>+4,820 <span className="u">ft</span></div></Metric>
              <Metric><div className="k">NPT (24h)</div><div className="v">3.2 <span className="u">hrs</span></div></Metric>
              <Metric><div className="k">Active alerts</div><div className="v" style={{ color: t.alert }}>1</div></Metric>
            </Metrics>
          </FleetRow>
        </Panel>

        {/* locations */}
        <div>
          <div style={{ marginBottom: 16 }}>
            <Typography type="heading" size="lg" weight="semibold">Active locations</Typography>
          </div>
          <Grid>
            {LOCATIONS.map((l) => {
              const pct = Math.round((l.md / l.td) * 100);
              const active = l.rop > 0;
              return (
                <LocCard key={l.well}>
                  <CardHead>
                    <div style={{ minWidth: 0 }}>
                      <Typography type="body" size="lg" weight="semibold">{l.well}</Typography>
                      <div style={{ marginTop: 2 }}>
                        <Typography type="body" size="sm" color="weaker">{l.field} · {l.rig}</Typography>
                      </div>
                    </div>
                    <Badge label={STATUS_LABEL[l.status]} type={STATUS_BADGE[l.status]} background="muted" size="sm" />
                  </CardHead>

                  <Body>
                    {/* signature borehole gauge */}
                    <div>
                      <Gauge>
                        <Strata>{STRATA.map((c, i) => <Band key={i} $c={c} />)}</Strata>
                        <Mask $h={100 - pct} />
                        <Bit $top={pct} $active={active} />
                      </Gauge>
                      <GaugeCap><div className="p">{pct}%</div><div className="l">to TD</div></GaugeCap>
                    </div>

                    <Stats>
                      <div><div className="k">Measured depth</div><div className="v">{fmt(l.md)}<span className="u"> ft</span></div></div>
                      <div><div className="k">Target depth</div><div className="v" style={{ color: t.ink2 }}>{fmt(l.td)}<span className="u"> ft</span></div></div>
                      <div><div className="k">Rate of penetration</div><div className="v" style={{ color: active ? t.drilling : t.ink4 }}>{active ? l.rop : '—'}<span className="u">{active ? ' ft/hr' : ''}</span></div></div>
                      <div><div className="k">Mud weight</div><div className="v" style={{ color: t.ink2 }}>{l.mw.toFixed(1)}<span className="u"> ppg</span></div></div>
                    </Stats>
                  </Body>

                  <div style={{ marginTop: 16 }}>
                    <ProgressBar progress={pct} type={active ? 'accent' : 'default'} size="sm" />
                  </div>

                  <Foot>
                    <div className="crew">
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: STATUS_DOT[l.status] }} />
                      Crew <b>{l.crew}</b>
                    </div>
                    <div>ETA to TD · <b>{l.eta}</b></div>
                  </Foot>
                </LocCard>
              );
            })}
          </Grid>
        </div>
      </Main>
    </Page>
  );
}
