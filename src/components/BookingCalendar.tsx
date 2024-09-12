import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import AnimatedUnderline from '@/components/ui/AnimatedUnderline';
import Cal from "@calcom/embed-react";

const BookingCalendar = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 1.0 }}
    className="text-center px-4 sm:px-6 lg:px-8"
  >
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
      <AnimatedUnderline>Book a Meeting</AnimatedUnderline>
    </h2>
    <Card className="shadow-lg max-w-2xl mx-auto">
      <CardContent className="py-4 px-4 sm:px-6">
        <p className="text-base sm:text-lg mb-4">Schedule a meeting with me using the calendar below:</p>
        <div className="w-full max-w-lg mx-auto">
          <Cal calLink="lutfifadlan" config={{height: '600px'}} />
        </div>
      </CardContent>
    </Card>
  </motion.section>
);

export default BookingCalendar;