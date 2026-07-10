export const scoringConfigs = {
  young: {
    visual: 'shields',
    calculateBand: ({ score, total }) => {
      const pct = total > 0 ? (score / total) * 100 : 0
      if (pct >= 90) return { band: '5 Shields', label: 'Xuat sac', value: 5 }
      if (pct >= 75) return { band: '4 Shields', label: 'Gioi', value: 4 }
      if (pct >= 50) return { band: '3 Shields', label: 'Kha', value: 3 }
      if (pct >= 25) return { band: '2 Shields', label: 'Trung binh', value: 2 }
      return { band: '1 Shield', label: 'Can co gang', value: 1 }
    },
  },
  ket: {
    visual: 'ring',
    calculateBand: ({ score, total }) => {
      const pct = total > 0 ? (score / total) * 100 : 0
      if (pct >= 90) return { band: 'Distinction', label: 'Xuat sac', value: 'A' }
      if (pct >= 75) return { band: 'Pass with Merit', label: 'Gioi', value: 'B' }
      if (pct >= 60) return { band: 'Pass', label: 'Dat', value: 'C' }
      return { band: 'A1 Level', label: 'Chua dat', value: 'D' }
    },
  },
  pet: {
    visual: 'ring',
    calculateBand: ({ score, total }) => {
      const pct = total > 0 ? (score / total) * 100 : 0
      if (pct >= 90) return { band: 'Distinction', label: 'Xuat sac', value: 'A' }
      if (pct >= 75) return { band: 'Pass with Merit', label: 'Gioi', value: 'B' }
      if (pct >= 60) return { band: 'Pass', label: 'Dat', value: 'C' }
      return { band: 'A2 Level', label: 'Chua dat', value: 'D' }
    },
  },
  ielts: {
    visual: 'band',
    calculateBand: ({ score, total }) => {
      const raw = total > 0 ? (score / total) * 40 : 0
      let band
      if (raw >= 39) band = 9.0
      else if (raw >= 37) band = 8.5
      else if (raw >= 35) band = 8.0
      else if (raw >= 33) band = 7.5
      else if (raw >= 30) band = 7.0
      else if (raw >= 27) band = 6.5
      else if (raw >= 23) band = 6.0
      else if (raw >= 19) band = 5.5
      else if (raw >= 15) band = 5.0
      else if (raw >= 12) band = 4.5
      else band = 4.0
      const label = band >= 7 ? 'Tot' : band >= 5 ? 'Trung binh' : 'Can cai thien'
      return { band: `Band ${band}`, label, value: band }
    },
  },
  toeic: {
    visual: 'bar',
    calculateBand: ({ score, total }) => {
      const scaled = total > 0 ? Math.round((score / total) * 495) : 0
      let label
      if (scaled >= 400) label = 'Xuat sac'
      else if (scaled >= 300) label = 'Kha'
      else if (scaled >= 200) label = 'Trung binh'
      else label = 'Can cai thien'
      return { band: `${scaled}/495`, label, value: scaled }
    },
  },
  tuyensinh: {
    visual: 'ring',
    calculateBand: ({ score, total }) => {
      const pct = total > 0 ? Math.round((score / total) * 100) : 0
      let label
      if (pct >= 80) label = 'Gioi'
      else if (pct >= 60) label = 'Kha'
      else if (pct >= 40) label = 'Trung binh'
      else label = 'Yeu'
      return { band: `${pct}%`, label, value: pct }
    },
  },
}
