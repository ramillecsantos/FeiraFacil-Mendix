// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package feirafacil.proxies;

public class DashboardGraficoPizza implements com.mendix.systemwideinterfaces.core.IEntityProxy
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject dashboardGraficoPizzaMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "FeiraFacil.DashboardGraficoPizza";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Setorizacao("Setorizacao"),
		Count("Count");

		private final java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public DashboardGraficoPizza(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected DashboardGraficoPizza(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject dashboardGraficoPizzaMendixObject)
	{
		if (dashboardGraficoPizzaMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!com.mendix.core.Core.isSubClassOf(entityName, dashboardGraficoPizzaMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.dashboardGraficoPizzaMendixObject = dashboardGraficoPizzaMendixObject;
		this.context = context;
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static feirafacil.proxies.DashboardGraficoPizza initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new feirafacil.proxies.DashboardGraficoPizza(context, mendixObject);
	}

	public static feirafacil.proxies.DashboardGraficoPizza load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return feirafacil.proxies.DashboardGraficoPizza.initialize(context, mendixObject);
	}

	/**
	 * Get value of Setorizacao
	 * @param setorizacao
	 */
	public final feirafacil.proxies.ENUM_Setorizacao getSetorizacao()
	{
		return getSetorizacao(getContext());
	}

	/**
	 * @param context
	 * @return value of Setorizacao
	 */
	public final feirafacil.proxies.ENUM_Setorizacao getSetorizacao(com.mendix.systemwideinterfaces.core.IContext context)
	{
		Object obj = getMendixObject().getValue(context, MemberNames.Setorizacao.toString());
		if (obj == null) {
			return null;
		}
		return feirafacil.proxies.ENUM_Setorizacao.valueOf((java.lang.String) obj);
	}

	/**
	 * Set value of Setorizacao
	 * @param setorizacao
	 */
	public final void setSetorizacao(feirafacil.proxies.ENUM_Setorizacao setorizacao)
	{
		setSetorizacao(getContext(), setorizacao);
	}

	/**
	 * Set value of Setorizacao
	 * @param context
	 * @param setorizacao
	 */
	public final void setSetorizacao(com.mendix.systemwideinterfaces.core.IContext context, feirafacil.proxies.ENUM_Setorizacao setorizacao)
	{
		if (setorizacao != null) {
			getMendixObject().setValue(context, MemberNames.Setorizacao.toString(), setorizacao.toString());
		} else {
			getMendixObject().setValue(context, MemberNames.Setorizacao.toString(), null);
		}
	}

	/**
	 * @return value of Count
	 */
	public final java.lang.Integer getCount()
	{
		return getCount(getContext());
	}

	/**
	 * @param context
	 * @return value of Count
	 */
	public final java.lang.Integer getCount(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.Count.toString());
	}

	/**
	 * Set value of Count
	 * @param count
	 */
	public final void setCount(java.lang.Integer count)
	{
		setCount(getContext(), count);
	}

	/**
	 * Set value of Count
	 * @param context
	 * @param count
	 */
	public final void setCount(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer count)
	{
		getMendixObject().setValue(context, MemberNames.Count.toString(), count);
	}

	@Override
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return dashboardGraficoPizzaMendixObject;
	}

	@Override
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this) {
			return true;
		}
		if (obj != null && getClass().equals(obj.getClass()))
		{
			final feirafacil.proxies.DashboardGraficoPizza that = (feirafacil.proxies.DashboardGraficoPizza) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

  /**
   * Gives full name ("Module.Entity" name) of the type of the entity.
   *
   * @return the name
   */
	public static java.lang.String getType()
	{
		return entityName;
	}
}
