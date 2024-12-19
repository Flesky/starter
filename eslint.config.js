import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    react: true,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
  },
  ...tailwind.configs['flat/recommended'],
)
