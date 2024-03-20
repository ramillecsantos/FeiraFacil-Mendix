// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package feirafacil.proxies;

public class Cadastro implements com.mendix.systemwideinterfaces.core.IEntityProxy
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject cadastroMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "FeiraFacil.Cadastro";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Produto("Produto"),
		Medida("Medida"),
		Setorizacao("Setorizacao"),
		Quantidade("Quantidade"),
		Despensa_Cadastro("FeiraFacil.Despensa_Cadastro");

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

	public Cadastro(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected Cadastro(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject cadastroMendixObject)
	{
		if (cadastroMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!com.mendix.core.Core.isSubClassOf(entityName, cadastroMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.cadastroMendixObject = cadastroMendixObject;
		this.context = context;
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static feirafacil.proxies.Cadastro initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new feirafacil.proxies.Cadastro(context, mendixObject);
	}

	public static feirafacil.proxies.Cadastro load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return feirafacil.proxies.Cadastro.initialize(context, mendixObject);
	}

	public static java.util.List<feirafacil.proxies.Cadastro> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		return com.mendix.core.Core.createXPathQuery(String.format("//%1$s%2$s", entityName, xpathConstraint))
			.execute(context)
			.stream()
			.map(obj -> feirafacil.proxies.Cadastro.initialize(context, obj))
			.collect(java.util.stream.Collectors.toList());
	}

	/**
	 * @return value of Produto
	 */
	public final java.lang.String getProduto()
	{
		return getProduto(getContext());
	}

	/**
	 * @param context
	 * @return value of Produto
	 */
	public final java.lang.String getProduto(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Produto.toString());
	}

	/**
	 * Set value of Produto
	 * @param produto
	 */
	public final void setProduto(java.lang.String produto)
	{
		setProduto(getContext(), produto);
	}

	/**
	 * Set value of Produto
	 * @param context
	 * @param produto
	 */
	public final void setProduto(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String produto)
	{
		getMendixObject().setValue(context, MemberNames.Produto.toString(), produto);
	}

	/**
	 * Get value of Medida
	 * @param medida
	 */
	public final feirafacil.proxies.ENUM_Medidas getMedida()
	{
		return getMedida(getContext());
	}

	/**
	 * @param context
	 * @return value of Medida
	 */
	public final feirafacil.proxies.ENUM_Medidas getMedida(com.mendix.systemwideinterfaces.core.IContext context)
	{
		Object obj = getMendixObject().getValue(context, MemberNames.Medida.toString());
		if (obj == null) {
			return null;
		}
		return feirafacil.proxies.ENUM_Medidas.valueOf((java.lang.String) obj);
	}

	/**
	 * Set value of Medida
	 * @param medida
	 */
	public final void setMedida(feirafacil.proxies.ENUM_Medidas medida)
	{
		setMedida(getContext(), medida);
	}

	/**
	 * Set value of Medida
	 * @param context
	 * @param medida
	 */
	public final void setMedida(com.mendix.systemwideinterfaces.core.IContext context, feirafacil.proxies.ENUM_Medidas medida)
	{
		if (medida != null) {
			getMendixObject().setValue(context, MemberNames.Medida.toString(), medida.toString());
		} else {
			getMendixObject().setValue(context, MemberNames.Medida.toString(), null);
		}
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
	 * @return value of Quantidade
	 */
	public final java.lang.Integer getQuantidade()
	{
		return getQuantidade(getContext());
	}

	/**
	 * @param context
	 * @return value of Quantidade
	 */
	public final java.lang.Integer getQuantidade(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.Quantidade.toString());
	}

	/**
	 * Set value of Quantidade
	 * @param quantidade
	 */
	public final void setQuantidade(java.lang.Integer quantidade)
	{
		setQuantidade(getContext(), quantidade);
	}

	/**
	 * Set value of Quantidade
	 * @param context
	 * @param quantidade
	 */
	public final void setQuantidade(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer quantidade)
	{
		getMendixObject().setValue(context, MemberNames.Quantidade.toString(), quantidade);
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of Despensa_Cadastro
	 */
	public final feirafacil.proxies.Despensa getDespensa_Cadastro() throws com.mendix.core.CoreException
	{
		return getDespensa_Cadastro(getContext());
	}

	/**
	 * @param context
	 * @return value of Despensa_Cadastro
	 * @throws com.mendix.core.CoreException
	 */
	public final feirafacil.proxies.Despensa getDespensa_Cadastro(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		feirafacil.proxies.Despensa result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.Despensa_Cadastro.toString());
		if (identifier != null) {
			result = feirafacil.proxies.Despensa.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of Despensa_Cadastro
	 * @param despensa_cadastro
	 */
	public final void setDespensa_Cadastro(feirafacil.proxies.Despensa despensa_cadastro)
	{
		setDespensa_Cadastro(getContext(), despensa_cadastro);
	}

	/**
	 * Set value of Despensa_Cadastro
	 * @param context
	 * @param despensa_cadastro
	 */
	public final void setDespensa_Cadastro(com.mendix.systemwideinterfaces.core.IContext context, feirafacil.proxies.Despensa despensa_cadastro)
	{
		if (despensa_cadastro == null) {
			getMendixObject().setValue(context, MemberNames.Despensa_Cadastro.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.Despensa_Cadastro.toString(), despensa_cadastro.getMendixObject().getId());
		}
	}

	@Override
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return cadastroMendixObject;
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
			final feirafacil.proxies.Cadastro that = (feirafacil.proxies.Cadastro) obj;
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
