import type { ReactNode } from 'react'
import { Page, Component, Element } from '@factoredui/react'
import { ORES } from '../data/ores'
import styles from '../styles/depth-chart.module.css'

const CHART_HEIGHT = 650
const Y_MIN = -64
const Y_MAX = 256
const Y_RANGE = Y_MAX - Y_MIN

const Y_LABELS = [-64, -59, -32, 0, 16, 32, 48, 64, 96, 128, 192, 256]

const DIAMOND_ZONE_TOP = -55
const DIAMOND_ZONE_BOTTOM = -63

function yToPixel(y: number): number {
  return ((Y_MAX - y) / Y_RANGE) * CHART_HEIGHT
}

function computeBarWidth(yMin: number, yMax: number): number {
  return Math.max(40, (yMax - yMin) / 3.2)
}

export function OreDepths(): ReactNode {
  return (
    <Page name="ore-depths">
      <div className="panel">
        <h2>Ore Distribution by Y-Level</h2>
        <p className="sub">Click any ore for details. Diamond zone highlighted.</p>
        <Component name="depth-chart">
          <div className={styles.chart}>
            {Y_LABELS.map(y => (
              <div
                key={y}
                className={styles.yLabel}
                style={{ top: yToPixel(y) }}
              >
                Y={y}
              </div>
            ))}

            <div
              className={styles.diamondZone}
              style={{
                top: yToPixel(DIAMOND_ZONE_TOP),
                height: yToPixel(DIAMOND_ZONE_BOTTOM) - yToPixel(DIAMOND_ZONE_TOP),
              }}
            />
            <div
              className={styles.diamondZoneLabel}
              style={{ top: yToPixel(DIAMOND_ZONE_TOP) - 18 }}
            >
              DIAMOND ZONE
            </div>

            {ORES.map(ore => (
              <Element key={ore.name} name={`ore-${ore.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div
                  className={styles.oreMarker}
                  style={{ top: yToPixel(ore.yPeak) }}
                  title={`${ore.name}: Y=${ore.yMin} to Y=${ore.yMax}, peak Y=${ore.yPeak}\n${ore.note}`}
                >
                  <div
                    className={styles.oreBar}
                    style={{ background: ore.color, width: computeBarWidth(ore.yMin, ore.yMax) }}
                  />
                  <span className={styles.oreLabel} style={{ color: ore.color }}>
                    {ore.name} (peak Y={ore.yPeak})
                  </span>
                </div>
              </Element>
            ))}
          </div>
        </Component>
      </div>
    </Page>
  )
}
