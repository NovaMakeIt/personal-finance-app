/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Beige500': '#98908B',
        'Beige100': '#F8F4F0',
        'Grey900': '#201F24',
        'Grey500': '#696868',
        'Grey300': '#B3B3B3',
        'Grey100': '#F2F2F2',
        'Green': '#277C78',
        'Yellow': '#F2CDAC',
        'Cyan': '#82C9D7',
        'Navy': '#626070',
        'Red': '#C94736',
        'Purple': '#826CB0',
        'Purple-light': '#AF81BA',
        'Turquoise': '#597C7C',
        'Brown': '#93674F',
        'Magenta': '#934F6F',
        'Blue': '#3F82B2',
        'NavyGrey': '#97A0AC',
        'ArmyGreen': '#7F9161',
        'Gold': '#CAB361',
        'Orange': '#BE6C49',
        'White': '#FFFFFF',
      },
      width: {
        '73': '18.75rem',
        '22': '88px',
        '247': '247px',
        
      },
      minWidth: {
        '608': '608px',
      },
      height: {
        '240': '240px',
      },
      spacing: {
        '50': '4px',
        '100': '8px',
        '150': '12px',
        '200': '16px',
        '250': '20px',
        '300': '24px',
        '400': '32px',
        '500': '40px',
      },
      screens: {
        'mobile': '375px',
  
        'tablet': '768px',
  
        'desktop': '1440px',
      },
      fontFamily: {
        'TextPreset1': ['PublicSansBold1','sans-serif'],
        'TextPreset2': ['PublicSansBold2','sans-serif'],
        'TextPreset3': ['PublicSansBold3','sans-serif'],
        'TextPreset4': ['PublicSansRegular4','sans-serif'],
        'TextPreset4Bold': ['PublicSansBold4','sans-serif'],
        'TextPreset5': ['PublicSansRegular5','sans-serif'],
        'TextPreset5Bold': ['PublicSansBold5','sans-serif'],
      },
      fontSize: {
        'TextPreset1': ['32px', { lineHeight: '120%', letterSpacing: '0px' }],
        'TextPreset2': ['20px', { lineHeight: '120%', letterSpacing: '0px' }],
        'TextPreset3': ['16px', { lineHeight: '150%', letterSpacing: '0px' }],
        'TextPreset4': ['14px', { lineHeight: '150%', letterSpacing: '0px' }],
        'TextPreset4Bold': ['14px', { lineHeight: '150%', letterSpacing: '0px' }],
        'TextPreset5': ['12px', { lineHeight: '150%', letterSpacing: '0px' }],
        'TextPreset5Bold': ['12px', { lineHeight: '150%', letterSpacing: '0px' }],
      },
    },
  },
  plugins: [],
}