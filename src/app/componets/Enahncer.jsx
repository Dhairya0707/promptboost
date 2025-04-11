'use client'
import { Button } from '@/components/ui/button'
import { AlignLeft, Brush, Briefcase, Shrink, Image } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'

const enhancementOptions = [
  { label: 'Descriptive', icon: AlignLeft },
  { label: 'Creative', icon: Brush },
  { label: 'Professional', icon: Briefcase },
  { label: 'Concise', icon: Shrink },
  { label: 'Midjourney Style', icon: Image },
]

const EnhancementTypeSelector = () => {
  const [selected, setSelected] = useState('Descriptive')

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {enhancementOptions.map((option) => {
        const Icon = option.icon
        const isActive = selected === option.label

        return (
          <Button
            key={option.label}
            variant={isActive ? 'default' : 'outline'}
            onClick={() => setSelected(option.label)}
            className={clsx(
              'flex items-center gap-2',
              isActive && 'ring-2 ring-primary ring-offset-2'
            )}
          >
            <Icon className="w-4 h-4" />
            {option.label}
          </Button>
        )
      })}
    </div>
  )
}

export default EnhancementTypeSelector;
