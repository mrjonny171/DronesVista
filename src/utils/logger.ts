import { useColorModeValue } from '@chakra-ui/react'

type LogLevel = 'info' | 'warn' | 'error' | 'debug'

interface LogMessage {
  level: LogLevel
  message: string
  data?: any
  timestamp: string
}

class Logger {
  private static instance: Logger
  private logs: LogMessage[] = []
  private isDevelopment = import.meta.env.DEV

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  private formatMessage(level: LogLevel, message: string, data?: any): LogMessage {
    return {
      level,
      message,
      data,
      timestamp: new Date().toISOString()
    }
  }

  private log(level: LogLevel, message: string, data?: any) {
    const logMessage = this.formatMessage(level, message, data)
    this.logs.push(logMessage)

    if (this.isDevelopment) {
      const styles = {
        info: 'color: #3182CE; font-weight: bold;',
        warn: 'color: #DD6B20; font-weight: bold;',
        error: 'color: #E53E3E; font-weight: bold;',
        debug: 'color: #805AD5; font-weight: bold;'
      }

      console.log(
        `%c[${logMessage.timestamp}] ${level.toUpperCase()}: ${message}`,
        styles[level]
      )
      if (data) {
        console.log('%cData:', 'color: #718096; font-style: italic;', data)
      }
    }
  }

  info(message: string, data?: any) {
    this.log('info', message, data)
  }

  warn(message: string, data?: any) {
    this.log('warn', message, data)
  }

  error(message: string, data?: any) {
    this.log('error', message, data)
  }

  debug(message: string, data?: any) {
    if (this.isDevelopment) {
      this.log('debug', message, data)
    }
  }

  getLogs(): LogMessage[] {
    return this.logs
  }

  clearLogs() {
    this.logs = []
  }
}

export const logger = Logger.getInstance() 