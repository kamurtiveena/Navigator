//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EF
{
    using System;
    
    public partial class usp_DisplayBusStats_Result
    {
        public string bus_no { get; set; }
        public string route_no { get; set; }
        public string city { get; set; }
        public Nullable<int> capacity { get; set; }
        public Nullable<int> available_seats { get; set; }
        public int feedback_id { get; set; }
        public string vehicle_no { get; set; }
        public string vehicle_punctuality { get; set; }
        public string journey { get; set; }
        public string feedback { get; set; }
        public Nullable<int> rating { get; set; }
    }
}