// See https://aka.ms/new-console-template for more information
using System;

public class Logger
{
    // Step 1: Private static variable that holds the single instance of Logger
    private static Logger _instance;

    // Step 2: Lock for thread-safety
    private static readonly object _lock = new object();

    // Step 3: Private constructor to prevent instantiation from outside the class
    private Logger() { }

    // Step 4: Public method to get the single instance of Logger
    public static Logger GetInstance()
    {
        // Double-checked locking to ensure only one instance is created
        if (_instance == null)
        {
            lock (_lock)
            {
                if (_instance == null)
                {
                    _instance = new Logger();
                }
            }
        }

        return _instance;
    }

    // Method to log messages
    public void Log(string message)
    {
        Console.WriteLine($"LOG: {message}");
    }
}

class Singleton
{
    static void Main(string[] args)
    {
        // Test the Singleton pattern

        // Get the first instance of Logger
        Logger logger1 = Logger.GetInstance();
        logger1.Log("This is the first log message.");

        // Get the second instance of Logger
        Logger logger2 = Logger.GetInstance();
        logger2.Log("This is the second log message.");

        // Check if both instances are the same
        Console.WriteLine("Are both instances the same? " + (logger1 == logger2));
    }
}
