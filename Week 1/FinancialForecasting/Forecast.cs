using System;

namespace FinancialForecasting
{
    class FinancialForecast
    {
        static void Main(string[] args)
        {
            double initialAmount = 1000; // Starting money
            double annualGrowthRate = 0.05; // 5% growth
            int years = 5;

            double futureValue = CalculateFutureValue(initialAmount, annualGrowthRate, years);
            Console.WriteLine($"Future value after {years} years is: {futureValue:F2}");
        }

        static double CalculateFutureValue(double amount, double rate, int years)
        {
            if (years == 0)
                return amount;
            return CalculateFutureValue(amount * (1 + rate), rate, years - 1);
        }
    }
}