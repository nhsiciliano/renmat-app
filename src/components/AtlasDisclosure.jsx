"use client"

import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

export default function AtlasDisclosure({ items, label }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="border-t border-[var(--atlas-line)]" role="group" aria-label={label}>
      {items.map((item, index) => {
        const isOpen = open === index
        const triggerId = `disclosure-trigger-${index}`
        const panelId = `disclosure-panel-${index}`

        return (
          <div key={item.title} className="border-b border-[var(--atlas-line)]">
            <h2>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="group flex min-h-16 w-full items-center justify-between gap-6 rounded-md py-5 text-left text-xl font-bold text-[var(--atlas-ink)] transition-colors hover:text-[var(--atlas-blue)] sm:text-2xl"
              >
                <span>{item.title}</span>
                <span aria-hidden="true" className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--atlas-blue-soft)] text-[var(--atlas-ink)] transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
            </h2>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ height: { duration: 0.28 } }}
                  className="overflow-hidden"
                >
                  <div className="max-w-[72ch] pb-7 pr-2 text-lg leading-relaxed text-[var(--atlas-ink-soft)] sm:pr-14">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
