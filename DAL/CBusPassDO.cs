﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.Entity;
using EF;


namespace DAL
{
    public class CBusPassDO : IBusPassDO, IDisposable
    {


        Galactic_KnightsEntities context = new Galactic_KnightsEntities();


        public IEnumerable<usp_SelectABus_Result> SelectABus(String pick_up_point)
        {
            return context.usp_SelectABus(pick_up_point);
        }
        public void AddBusPass(String associate_id, String bus_no, String bus_pass_type,
            String address, String city, String pick_up_point, String destination,
            String mobile, int privileged_user,String issued_on,int go_green,String comment, String valid_till,int cost)
        {
             context.usp_AddBusPass(associate_id,bus_no,bus_pass_type,
            address, city,pick_up_point, destination,
             mobile, privileged_user,  issued_on,go_green,comment, valid_till,cost);
        }
        public IEnumerable<usp_GetBusPass_Result> GetBusPass(String associate_id)
        {
            return context.usp_GetBusPass(associate_id);
        }
        public void RenewBusPass(int bus_pass_id, int period)
        {
            context.usp_RenewBusPass(bus_pass_id,period);
        }
        public void CancelBusPass(int bus_pass_id)
        {
            context.usp_CancelBusPass(bus_pass_id);
        }
        
        
        
        
        
        private bool disposedValue = false;


        public virtual void Dispose(bool disposing)
        {
            if (!this.disposedValue)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposedValue = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    


    }
}