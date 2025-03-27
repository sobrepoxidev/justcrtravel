"use client";
import { useActionState, useState } from 'react';
import { handleVacationForm } from "../../actions";
import { motion } from 'framer-motion';
import { FaSpinner, FaCommentDots } from 'react-icons/fa';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useTranslations } from "next-intl";

// Predefined lists with more detailed options (optional i18n if you want localized descriptions/icons too)
const ACTIVITIES = [
  { value: 'ATV', label: 'ATV Adventure', icon: '🏍️' },
  { value: 'Canopy', label: 'Canopy Tour', icon: '🌳' },
  { value: 'Canyoning', label: 'Canyoning', icon: '🏞️' },
  { value: 'Catamaran', label: 'Catamaran Tour', icon: '⛵' },
  { value: 'ChocolateTours', label: 'Chocolate Tours', icon: '🍫' },
  { value: 'CityTours', label: 'City Tours', icon: '🏙️' },
  { value: 'CoffeeTour', label: 'Coffee Tour', icon: '☕' },
  { value: 'Diving', label: 'Diving', icon: '🤿' },
  { value: 'HangingBridges', label: 'Hanging Bridges', icon: '🌉' },
  { value: 'Hiking', label: 'Hiking Expedition', icon: '🥾' },
  { value: 'HorsebackRiding', label: 'Horseback Riding', icon: '🐎' },
  { value: 'LearnSpanish', label: 'Learn Spanish', icon: '📚' },
  { value: 'Rafting', label: 'Rafting', icon: '🛶' },
  { value: 'Snorkeling', label: 'Snorkeling', icon: '🤿' },
  { value: 'SUP', label: 'SUP (Stand Up Paddle)', icon: '🏄' },
  { value: 'VisitToFarms', label: 'Visit to Farms', icon: '🚜' },
  { value: 'Waterfalls', label: 'Waterfall Exploration', icon: '💦' }
];

const DESTINATIONS = [
  { value: 'Arenal', label: 'Arenal', description: 'Volcanic Paradise' },
  { value: 'Conchal', label: 'Conchal', description: 'Beach Getaway' },
  { value: 'Flamingo', label: 'Flamingo', description: 'Coastal Charm' },
  { value: 'ManuelAntonio', label: 'Manuel Antonio', description: 'National Park' },
  { value: 'Monteverde', label: 'Monteverde', description: 'Cloud Forest' },
  { value: 'Papagayo', label: 'Papagayo', description: 'Peninsula Escape' },
  { value: 'Samara', label: 'Samara', description: 'Laid-back Beach' },
  { value: 'Sarapiqui', label: 'Sarapiquí', description: 'Rainforest Adventure' },
  { value: 'Tamarindo', label: 'Tamarindo', description: 'Surf Town' }
];

// MultiSelect Component
function MultiSelect({ 
  options, 
  selected, 
  onChange, 
  placeholder 
}: { 
  options: Array<{value: string, label: string, icon?: string, description?: string}>, 
  selected: string[], 
  onChange: (value: string[]) => void,
  placeholder: string
}) {
  return (
    <Listbox 
      value={selected} 
      onChange={onChange} 
      multiple
    >
      <div className="relative">
        <Listbox.Button className="relative w-full p-3 border-2 border-gray-200 rounded-lg 
          text-left focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
          <span className="block truncate">
            {selected.length === 0 
              ? placeholder 
              : selected.map(val => 
                  options.find(opt => opt.value === val)?.label
                ).join(', ')
            }
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto 
            rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                  }`
                }
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {option.icon} {option.label}
                      {option.description && (
                        <span className="text-gray-500 text-xs block">
                          {option.description}
                        </span>
                      )}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? 'text-blue-600' : 'text-blue-600'
                        }`}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

export default function BuildYourVacations() {
  // i18n
  const t = useTranslations("buildVacation");

  const [state, formAction, isPending] = useActionState(handleVacationForm, null);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
  

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 pt-20 sm:pt-36 pb-0"
      >
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight text-gray-950">
          {t("title")}
        </h1>

        <motion.form
          action={formAction}
          className="bg-white shadow-2xl rounded-2xl p-2 sm:p-12 sm:py-4 pt-1 mb-1 grid md:grid-cols-2 gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <span>{t("activities.label")}</span>
                <span className="ml-2 text-sm text-gray-500">
                  {t("activities.multi")}
                </span>
              </label>
              <MultiSelect 
                options={ACTIVITIES}
                selected={selectedActivities}
                onChange={setSelectedActivities}
                placeholder={t("activities.placeholder")}
              />
              <input 
                type="hidden" 
                name="what" 
                value={selectedActivities.join(',')} 
              />
            </div>

            <div className="grid grid-cols-2 gap-4 gap-y-0">
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  {t("arrival")}
                </label>
                <input
                  type="date"
                  name="arrival"
                  className="w-full p-3 border-2 border-gray-200 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  {t("departure")}
                </label>
                <input
                  type="date"
                  name="departure"
                  className="w-full p-3 border-2 border-gray-200 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                {t("firstName")} *
              </label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full p-3 border-2 border-gray-200 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                {t("phone")}
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full p-3 border-2 border-gray-200 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <span>{t("destinations.label")}</span>
                <span className="ml-2 text-sm text-gray-500">
                  {t("destinations.multi")}
                </span>
              </label>
              <MultiSelect 
                options={DESTINATIONS}
                selected={selectedDestinations}
                onChange={setSelectedDestinations}
                placeholder={t("destinations.placeholder")}
              />
              <input 
                type="hidden" 
                name="where" 
                value={selectedDestinations.join(',')} 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  {t("adults")}
                </label>
                <input
                  type="number"
                  name="adults"
                  min="0"
                  className="w-full p-3 border-2 border-gray-200 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  {t("kids")}
                </label>
                <input
                  type="number"
                  name="kids"
                  min="0"
                  className="w-full p-3 border-2 border-gray-200 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                {t("lastName")} *
              </label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full p-3 border-2 border-gray-200 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                {t("email")} *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border-2 border-gray-200 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Comments Section - Spanning full width */}
          <div className="col-span-full">
            <label className="mb-2 font-semibold text-gray-700 flex items-center">
              <FaCommentDots className="mr-2" /> {t("comments.label")}
            </label>
            <textarea
              name="comments"
              rows={4}
              placeholder={t("comments.placeholder")}
              className="w-full p-3 border-2 border-gray-200 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-y"
            />
          </div>

          {/* Form Footer */}
          <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Success/Error Message */}
            <div className="min-h-[1.5rem] text-center md:text-left">
              {state && (
                <p className={`
                  ${state.success ? 'text-green-600' : 'text-red-600'}
                `}>
                  {state.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={state ? true : false}
                className={`
                  w-full md:w-auto px-8 py-3 rounded-lg 
                  text-white font-bold tracking-wider 
                  transition-all duration-300
                  ${state
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
                  }
                  flex items-center justify-center gap-2
                `}
              >
                <span className="inline-flex items-center gap-2">
                  {isPending && <FaSpinner className="animate-spin" />}
                  {isPending ? t("submitting") : t("submit")}
                </span>
              </button>
            </div>
          </div>
        </motion.form>
      </motion.div>


    </div>
  );
}