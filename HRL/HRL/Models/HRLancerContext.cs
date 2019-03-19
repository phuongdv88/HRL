using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;
namespace HRL.Models
{
    public partial class HRLancerContext : DbContext
    {
        public HRLancerContext(DbContextOptions<HRLancerContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AlertRequest> AlertRequest { get; set; }
        public virtual DbSet<Applicant> Applicant { get; set; }
        public virtual DbSet<Article> Article { get; set; }
        public virtual DbSet<AutomatedEmail> AutomatedEmail { get; set; }
        public virtual DbSet<AutomatedSmsSending> AutomatedSmsSending { get; set; }
        public virtual DbSet<BlockedHr> BlockedHr { get; set; }
        public virtual DbSet<Candidate> Candidate { get; set; }
        public virtual DbSet<Client> Client { get; set; }
        public virtual DbSet<ClientFeedback> ClientFeedback { get; set; }
        public virtual DbSet<Hr> Hr { get; set; }
        public virtual DbSet<Hrfeedback> Hrfeedback { get; set; }
        public virtual DbSet<JobCategory> JobCategory { get; set; }
        public virtual DbSet<JobDescription> JobDescription { get; set; }
        public virtual DbSet<LoginAccount> LoginAccount { get; set; }
        public virtual DbSet<Message> Message { get; set; }
        public virtual DbSet<PriorityClient> PriorityClient { get; set; }
        public virtual DbSet<Requirement> Requirement { get; set; }
        public virtual DbSet<SavedJob> SavedJob { get; set; }
        public virtual DbSet<Specialist> Specialist { get; set; }
        public virtual DbSet<SystemLog> SystemLog { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.2-servicing-10034");

            modelBuilder.Entity<AlertRequest>(entity =>
            {
                entity.Property(e => e.CreatedTime).HasColumnType("datetime");

                entity.Property(e => e.Frequency).HasMaxLength(50);

                entity.Property(e => e.TimeToSend).HasColumnType("datetime");
            });

            modelBuilder.Entity<Applicant>(entity =>
            {
                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.Hrid).HasColumnName("HRId");

                entity.Property(e => e.ReferedTime).HasColumnType("datetime");

                entity.Property(e => e.ResumeLink).HasMaxLength(500);

                entity.Property(e => e.Status).HasMaxLength(50);

                entity.Property(e => e.UpdatedTime).HasColumnType("datetime");
            });

            modelBuilder.Entity<Article>(entity =>
            {
                entity.Property(e => e.CreatedTime).HasColumnType("datetime");
            });

            modelBuilder.Entity<AutomatedEmail>(entity =>
            {
                entity.Property(e => e.AutomatedEmailId).ValueGeneratedNever();

                entity.Property(e => e.CreatedTime).HasColumnType("datetime");

                entity.Property(e => e.EmailFrom).HasMaxLength(50);

                entity.Property(e => e.EmailTo).HasMaxLength(50);

                entity.Property(e => e.SendingResult).HasMaxLength(50);

                entity.Property(e => e.Title).HasMaxLength(1000);
            });

            modelBuilder.Entity<AutomatedSmsSending>(entity =>
            {
                entity.HasKey(e => e.SmsSendingId);

                entity.Property(e => e.SmsSendingId).ValueGeneratedNever();

                entity.Property(e => e.Message).HasMaxLength(1000);

                entity.Property(e => e.PhoneNumber).HasMaxLength(50);

                entity.Property(e => e.Status).HasMaxLength(50);

                entity.Property(e => e.TimeToSend).HasColumnType("datetime");
            });

            modelBuilder.Entity<BlockedHr>(entity =>
            {
                entity.ToTable("BlockedHR");

                entity.Property(e => e.BlockedHrid)
                    .HasColumnName("BlockedHRId")
                    .ValueGeneratedNever();

                entity.Property(e => e.CreateTime).HasColumnType("datetime");

                entity.Property(e => e.Hrid).HasColumnName("HRid");
            });

            modelBuilder.Entity<Candidate>(entity =>
            {
                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.CurrentJobTitle).HasMaxLength(500);

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.FullName).HasMaxLength(50);

                entity.Property(e => e.Hrid).HasColumnName("HRId");

                entity.Property(e => e.PhoneNumber).HasMaxLength(50);

                entity.Property(e => e.ResumeLink).HasMaxLength(500);

                entity.Property(e => e.UpdatedTime).HasColumnType("datetime");
            });

            modelBuilder.Entity<Client>(entity =>
            {
                entity.Property(e => e.AccountType).HasMaxLength(50);

                entity.Property(e => e.Address).HasMaxLength(500);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.CreatedTime).HasColumnType("datetime");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.LogoLink).HasMaxLength(500);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.NumberOfJd).HasColumnName("NumberOfJD");

                entity.Property(e => e.OfficePhoneNumber).HasMaxLength(50);

                entity.Property(e => e.PacketType).HasMaxLength(50);

                entity.Property(e => e.PhoneNumber).HasMaxLength(50);

                entity.Property(e => e.Size).HasMaxLength(50);

                entity.Property(e => e.Website).HasMaxLength(500);
            });

            modelBuilder.Entity<ClientFeedback>(entity =>
            {
                entity.Property(e => e.ClientFeedbackId).ValueGeneratedNever();

                entity.Property(e => e.Comment).HasMaxLength(1000);

                entity.Property(e => e.FeedbackType).HasMaxLength(50);

                entity.Property(e => e.Hrid).HasColumnName("HRId");
            });

            modelBuilder.Entity<Hr>(entity =>
            {
                entity.ToTable("HR");

                entity.Property(e => e.Hrid).HasColumnName("HRId");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.MiddleName).HasMaxLength(50);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Hrfeedback>(entity =>
            {
                entity.ToTable("HRFeedback");

                entity.Property(e => e.HrfeedbackId)
                    .HasColumnName("HRFeedbackId")
                    .ValueGeneratedNever();

                entity.Property(e => e.Comment).HasMaxLength(1000);

                entity.Property(e => e.FeedbackType).HasMaxLength(50);

                entity.Property(e => e.Hrid).HasColumnName("HRId");
            });

            modelBuilder.Entity<JobCategory>(entity =>
            {
                entity.HasIndex(e => e.JobCategoryId)
                    .HasName("IX_JobCategory");

                entity.Property(e => e.JobCategoryValue).HasMaxLength(50);
            });

            modelBuilder.Entity<JobDescription>(entity =>
            {
                entity.Property(e => e.AttachmentFileName).HasMaxLength(50);

                entity.Property(e => e.AttachmentLink).HasMaxLength(500);

                entity.Property(e => e.CreatedTime).HasColumnType("datetime");

                entity.Property(e => e.Employer).HasMaxLength(500);

                entity.Property(e => e.ExpiredDate).HasColumnType("date");

                entity.Property(e => e.GradeLevel).HasMaxLength(50);

                entity.Property(e => e.JobTitle).HasMaxLength(500);

                entity.Property(e => e.JobType).HasMaxLength(50);

                entity.Property(e => e.Location).HasMaxLength(500);

                entity.Property(e => e.LogoLink).HasMaxLength(500);

                entity.Property(e => e.MapLink).HasMaxLength(500);

                entity.Property(e => e.MaxSalary).HasMaxLength(50);

                entity.Property(e => e.MinSalary).HasMaxLength(50);

                entity.Property(e => e.Salary).HasMaxLength(500);
            });

            modelBuilder.Entity<LoginAccount>(entity =>
            {
                entity.Property(e => e.LockoutDateUtc).HasColumnType("datetime");

                entity.Property(e => e.PasswordHash)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Role)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SecurityStamp)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Message>(entity =>
            {
                entity.Property(e => e.MessageId).ValueGeneratedNever();

                entity.Property(e => e.Hrid).HasColumnName("HRId");

                entity.Property(e => e.MessageFrom).HasMaxLength(50);

                entity.Property(e => e.SentTime).HasColumnType("datetime");

                entity.Property(e => e.Status).HasMaxLength(10);
            });

            modelBuilder.Entity<PriorityClient>(entity =>
            {
                entity.Property(e => e.ClientGroup).HasMaxLength(50);

                entity.Property(e => e.ExpiredTime).HasColumnType("datetime");

                entity.Property(e => e.Type).HasMaxLength(50);

                entity.Property(e => e.UpdatedTime).HasColumnType("datetime");
            });

            modelBuilder.Entity<Requirement>(entity =>
            {
                entity.Property(e => e.RequirementId).ValueGeneratedNever();

                entity.Property(e => e.CreatedTime).HasColumnType("datetime");

                entity.Property(e => e.ExpiredTime).HasColumnType("datetime");

                entity.Property(e => e.FinishTime).HasColumnType("datetime");

                entity.Property(e => e.RequirementType).HasMaxLength(50);
            });

            modelBuilder.Entity<SavedJob>(entity =>
            {
                entity.Property(e => e.ExpiredDate).HasMaxLength(50);

                entity.Property(e => e.Hrid).HasColumnName("HRId");

                entity.Property(e => e.JobTitle).HasMaxLength(50);

                entity.Property(e => e.Link).HasMaxLength(1000);
            });

            modelBuilder.Entity<Specialist>(entity =>
            {
                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.MiddleName).HasMaxLength(50);

                entity.Property(e => e.PhoneNumber).HasMaxLength(50);

                entity.Property(e => e.Role).HasMaxLength(50);
            });

            modelBuilder.Entity<SystemLog>(entity =>
            {
                entity.Property(e => e.ActionTime).HasColumnType("datetime");

                entity.Property(e => e.ActionType).HasMaxLength(50);
            });
        }
    }
}
