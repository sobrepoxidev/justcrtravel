"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function TravelPackButton({ color, amount }: { color: string, amount: number }) {
  const t = useTranslations("travelPack");

  return (
    <motion.form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_blank"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }}
      className="relative flex flex-col items-center justify-center 
                 sm:w-64 p-6 rounded-2xl shadow-2xl 
                 transform transition-all duration-300 
                 hover:scale-105 hover:shadow-3xl"
      style={{ 
        backgroundColor: color,
        background: `linear-gradient(145deg, ${color}, ${color}cc)` 
      }}
    >
      <input type="hidden" name="cmd" value="_xclick" />
      <input type="hidden" name="business" value="Info@justcostaricatravel.com" />
      <input type="hidden" name="item_name" value={t("itemName")} />
      <input type="hidden" name="amount" value={amount} />
      <input type="hidden" name="currency_code" value="USD" />

      <div className="text-center mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
          <span className="relative inline-block group">
            {t("title")}{" "}
            <span className="text-white bg-black/20 px-1 rounded-md">
              {t("highlight")}
            </span>
          </span>
        </h3>

        <div className="text-3xl font-extrabold text-white drop-shadow-md mb-4">
          ${amount}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="bg-white text-black px-6 py-2 
                   rounded-full font-bold 
                   transition-all duration-300 
                   hover:bg-opacity-90 
                   shadow-md hover:shadow-lg"
      >
        {t("buyButton")}
      </motion.button>

      {/* Decorative element */}
      <div className="absolute top-2 right-2 opacity-50">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="text-white"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>
    </motion.form>
  );
}