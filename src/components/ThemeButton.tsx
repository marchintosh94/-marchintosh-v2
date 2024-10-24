'use client'

import { toggleMode } from '@/utils/theme'
import { faLightbulb, faLightbulbOn } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ThemeButton = () => {
  return (
    <div
      onClick={toggleMode}
      className="flex items-center cursor-pointer rotate-180"
    >
      <FontAwesomeIcon
        className="!h-10 w-10 !hidden dark:!block"
        icon={faLightbulb}
      />
      <FontAwesomeIcon
        className="!h-10 w-10 dark:!hidden !block text-mb_accent"
        icon={faLightbulbOn}
      />
    </div>
  )
}

export default ThemeButton
