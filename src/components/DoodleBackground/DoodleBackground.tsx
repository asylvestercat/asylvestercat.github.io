import type { CSSProperties } from "react";
import styles from "./DoodleBackground.module.css";

type Doodle = {
  file: string;
  css: CSSProperties;
  size: number;
  rot: number;
};

const doodles: Doodle[] = [
  // ── Left margin ──
  { file: "doodle_001", css: { left: "2%",   top: "0.5%" }, size: 68, rot: 14  },
  { file: "doodle_006", css: { left: "4%",   top: "12%"  }, size: 55, rot: -20 },
  { file: "doodle_011", css: { left: "1%",   top: "22%"  }, size: 78, rot: 28  },
  { file: "doodle_016", css: { left: "5%",   top: "32%"  }, size: 60, rot: -9  },
  { file: "doodle_021", css: { left: "1.5%", top: "43%"  }, size: 72, rot: 17  },
  { file: "doodle_026", css: { left: "3.5%", top: "53%"  }, size: 52, rot: -24 },
  { file: "doodle_032", css: { left: "1%",   top: "63%"  }, size: 82, rot: 7   },
  { file: "doodle_038", css: { left: "5%",   top: "72%"  }, size: 58, rot: -13 },
  { file: "doodle_043", css: { left: "2%",   top: "81%"  }, size: 70, rot: 32  },
  { file: "doodle_049", css: { left: "0.5%", top: "91%"  }, size: 54, rot: -7  },
  { file: "doodle_054", css: { left: "4%",   top: "18%"  }, size: 64, rot: 22  },
  { file: "doodle_059", css: { left: "2%",   top: "48%"  }, size: 76, rot: -30 },
  { file: "doodle_065", css: { left: "6%",   top: "67%"  }, size: 50, rot: 4   },
  { file: "doodle_070", css: { left: "1%",   top: "77%"  }, size: 82, rot: -17 },
  { file: "doodle_076", css: { left: "3%",   top: "97%"  }, size: 58, rot: 21  },

  // ── Right margin ──
  { file: "doodle_081", css: { right: "2%",   top: "0.5%" }, size: 66, rot: -11 },
  { file: "doodle_086", css: { right: "4.5%", top: "14%"  }, size: 58, rot: 24  },
  { file: "doodle_092", css: { right: "1%",   top: "25%"  }, size: 74, rot: -8  },
  { file: "doodle_097", css: { right: "3.5%", top: "36%"  }, size: 54, rot: 18  },
  { file: "doodle_102", css: { right: "1%",   top: "47%"  }, size: 80, rot: -22 },
  { file: "doodle_108", css: { right: "5%",   top: "57%"  }, size: 50, rot: 11  },
  { file: "doodle_113", css: { right: "1.5%", top: "69%"  }, size: 64, rot: -5  },
  { file: "doodle_118", css: { right: "3%",   top: "78%"  }, size: 70, rot: 26  },
  { file: "doodle_123", css: { right: "1%",   top: "87%"  }, size: 56, rot: -16 },
  { file: "doodle_130", css: { right: "4%",   top: "94%"  }, size: 54, rot: 13  },
  { file: "doodle_136", css: { right: "5%",   top: "2%"   }, size: 76, rot: -26 },
  { file: "doodle_142", css: { right: "1%",   top: "40%"  }, size: 60, rot: 9   },
  { file: "doodle_148", css: { right: "5%",   top: "52%"  }, size: 68, rot: -19 },
  { file: "doodle_163", css: { right: "2%",   top: "73%"  }, size: 78, rot: 6   },
  { file: "doodle_172", css: { right: "1.5%", top: "83%"  }, size: 54, rot: -11 },

  // ── Bottom fill — spread across full width for any empty space ──
  { file: "doodle_002", css: { left: "3%",   bottom: "10%" }, size: 62, rot: 16  },
  { file: "doodle_014", css: { left: "14%",  bottom: "3%"  }, size: 55, rot: -22 },
  { file: "doodle_024", css: { left: "26%",  bottom: "8%"  }, size: 70, rot: 9   },
  { file: "doodle_034", css: { left: "38%",  bottom: "2%"  }, size: 58, rot: -14 },
  { file: "doodle_046", css: { left: "50%",  bottom: "6%"  }, size: 66, rot: 25  },
  { file: "doodle_057", css: { left: "62%",  bottom: "1%"  }, size: 52, rot: -8  },
  { file: "doodle_068", css: { left: "73%",  bottom: "9%"  }, size: 72, rot: 18  },
  { file: "doodle_078", css: { left: "84%",  bottom: "4%"  }, size: 58, rot: -20 },
  { file: "doodle_096", css: { left: "93%",  bottom: "7%"  }, size: 60, rot: 12  },
];

export default function DoodleBackground() {
  return (
    <div className={styles.container} aria-hidden="true">
      {doodles.map((d, i) => (
        <img
          key={i}
          src={`/doodle-vectors/${d.file}.svg`}
          className={styles.doodle}
          style={{
            ...d.css,
            width: d.size,
            height: d.size,
            transform: `rotate(${d.rot}deg)`,
          }}
          alt=""
        />
      ))}
    </div>
  );
}
