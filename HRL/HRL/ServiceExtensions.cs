using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contracts;
using LoggerService;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace HRL
{
    public static class ServiceExtensions
    {
        public static void ConfigureLoggerService(this IServiceCollection service)
        {
            service.AddSingleton<ILoggerManager, LoggerManager>();
        }
    }
}
